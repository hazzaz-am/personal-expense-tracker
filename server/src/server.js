const mongoose = require("mongoose");
const { envVars } = require("./app/config/env");
const { app } = require("./app");

const startServer = async () => {
	try {
		await mongoose.connect(envVars.DATABASE_URL);
		console.log("🟢Database Connected");
		app.listen(envVars.PORT, () => {
			console.log(`Server is listening on PORT: ${envVars.PORT}`);
		});
		console.log("🟢Database Connected");
	} catch (error) {
		console.log(error);
	}
};

(async () => {
	await startServer();
})();
