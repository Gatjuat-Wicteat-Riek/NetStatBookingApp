/** @format */

export const errorHandler = (statusCode, message) => {
    // for handing all the errors in backend
    const error = new Error();
    (error.statusCode = statusCode), (error.message = message);
    return error;
};