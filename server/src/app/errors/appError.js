// Custom error class for centralized error handling
class AppError extends Error {
	statusCode;
	/**
	 * @param {number} statusCode - HTTP status code
	 * @param {string} message - Error message
	 */
	constructor(statusCode, message) {
		super(message);
		this.statusCode = statusCode;
	}
}

module.exports = AppError;
