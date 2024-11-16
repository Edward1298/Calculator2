import express from 'express';
import { Calculate } from '../Logic/Calculate.mjs'; 
import { Validations } from '../Logic/Validations.mjs'; 
import { Response } from '../Logic/Response.mjs';   

const PORT = process.env.PORT ?? 8080;
// Create an instance of Express
const app = express();
app.use(express.json()); // Middleware to parse JSON body

app.get('/calculate', (req, res) => {
    try {
        let { a, b, operator } = req.query;

        // Validation of input parameters
        const validations = Validations(a, b, operator);
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);

        if (validations !== 'ok') {
            const answer = Response(validations, operator, num1, num2);
            return res.status(answer.status).json(answer); // Return validation error response
        }
        // Fix the empty space problem from the URL
        if (operator === ' ') {
            operator = '+';
        }

        // Perform calculation
        const result = Calculate(num1, num2, operator);
        const answer = Response(result, operator, num1, num2);
        
        // Send result in consistent format
        return res.status(answer.status).json(answer);

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: 'Internal Server Error' }); // Return 500 on server error
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
