export function Response(message, operator, num1, num2){
    if(isNaN(message))
    {
           return {
            status: 400,
                error: message,
                timestamp: new Date().toISOString()
           }
    } else 
    {
        return {
            status: 200,
            operation: operator, 
                input: {
                    num1: num1,
                    num2: num2
                },  
                result: message,  
                timestamp: new Date().toISOString()

        }
    }
}