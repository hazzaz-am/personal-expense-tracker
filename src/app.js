const express = require("express");
const cors = require("cors");
const router = require("./app/routes");
const { notFoundHandler } = require("./app/middlewares/notFoundHandler");
const { globalErrorHandler } = require("./app/middlewares/globalErrorHandler");

const app = express();

// middlewares
app.use(express.json());

app.use(cors());

// routes
app.use("/api/v1", router);

app.get("/", (_req, res) => {
	res.status(200).json({
		message: "Server health is OK",
	});
});

// error handler
app.use(notFoundHandler);
app.use(globalErrorHandler);
module.exports = app;
