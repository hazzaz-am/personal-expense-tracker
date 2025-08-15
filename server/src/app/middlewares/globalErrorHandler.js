const AppError = require("../errors/appError");
const {
	handleValidationError,
	handleCastError,
	handleDuplicateError,
} = require("../helpers/handleError");

/**
 * Global error-handling middleware
 * This middleware catches all errors thrown in routes and controllers,
 * sends a consistent JSON response to the client.
 */

const globalErrorHandler = (err, req, res, next) => {
	let errorSources = [];
	let statusCode = 500;
	let message = `Something went wrong`;

	// Handle Mongoose CastError (invalid ObjectId or wrong type)
	if (err.name === "CastError") {
		const simplifiedError = handleCastError(err);
		statusCode = simplifiedError.statusCode;
		message = simplifiedError.message;
	}
	// Handle Mongoose ValidationError (schema validation failed)
	else if (err.name === "ValidationError") {
		const simplifiedError = handleValidationError(err);
		statusCode = simplifiedError.statusCode;
		message = simplifiedError.message;
		errorSources = simplifiedError.errorSources;
	}
	// Handle custom AppError (thrown manually in controllers/services)
	else if (err instanceof AppError) {
		statusCode = err.statusCode;
		message = err.message;
	}
	// Handle generic JavaScript errors
	else if (err instanceof Error) {
		statusCode = 500;
		message = err.message;
	}

	// Send JSON response in a consistent format
	res.status(statusCode).json({
		success: false,
		message,
		errorSources,
	});
};

module.exports = { globalErrorHandler };
