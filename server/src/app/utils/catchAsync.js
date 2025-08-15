/**
 * catchAsync is a wrapper that:
 * - Calls async route handler.
 * - Converts its result into a Promise.
 * - Catches any errors and passes them to next() so Express can handle them centrally.
 */

const catchAsync = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch((error) => {
		next(error);
	});
};

module.exports = {
	catchAsync,
};
