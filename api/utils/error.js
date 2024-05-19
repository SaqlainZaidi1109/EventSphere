//another function to handle the errors
//this is when we dont have error in the system but we need to create on

export const errorHandler = (statusCode, message)=>{
    const error = new Error()
    error.statusCode = statusCode;
    error.message=message;
    return error;
}