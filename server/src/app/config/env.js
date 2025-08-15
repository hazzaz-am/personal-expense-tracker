require("dotenv").config();

const loadEnvVariables = () => {
	const requiredEnvVariables = ["PORT", "DATABASE_URL"];

	requiredEnvVariables.forEach((key) => {
		if (!process.env[key]) {
			throw new Error(`Required environment variable "${key}" is missing`);
		}
	});

	return {
		PORT: process.env.PORT,
		DATABASE_URL: process.env.DATABASE_URL,
	};
};

module.exports = {
	envVars: loadEnvVariables(),
};
