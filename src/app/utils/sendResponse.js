// sendResponse is a helper to send consistent JSON responses

const sendResponse = (res, data) => {
	res.status(data.statusCode).json({
		success: data.success,
		message: data.message,
		data: data.data,
		meta: data.meta,
	});
};

module.exports = sendResponse;
