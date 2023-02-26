const tryCatch = (param) => async(req, res, next) => {
    try {
        await param(req, res)
    } catch (error) {
        const status = error.response ? error.response.status : 500;
        const message = getErrorMessage(status) || error.message;

        next(new Error(message));
    }
}

module.exports = {tryCatch}