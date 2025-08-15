const handleCastError = (err) => {
	return {
		statusCode: 400,
		message: "Please provide a valid id",
	};
};

const handleValidationError = (err) => {
	const errorSources = [];

	const errors = Object.values(err.errors);
	errors.forEach((errorObject) =>
		errorSources.push({
			path: errorObject.path,
			message: errorObject.message,
		})
	);

	return {
		statusCode: 400,
		message: "Validation Error",
		errorSources,
	};
};

module.exports = {
	handleCastError,
	handleValidationError,
};
