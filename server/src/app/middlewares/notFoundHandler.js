const notFoundHandler = (req, res) => {
	res.status(404).json({
		success: false,
		message: `Cannot find ${req.originalUrl} on this server!`,
	});
};

module.exports = { notFoundHandler };
