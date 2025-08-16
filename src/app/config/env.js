require("dotenv").config();

const loadEnvVariables = () => {
	const requiredEnvVariables = ["PORT", "DATABASE_URL", "NODE_ENV"];

	requiredEnvVariables.forEach((key) => {
		if (!process.env[key]) {
			throw new Error(`Required environment variable "${key}" is missing`);
		}
	});

	return {
		PORT: process.env.PORT,
		DATABASE_URL: process.env.DATABASE_URL,
		NODE_ENV: process.env.NODE_ENV,
	};
};

module.exports = {
	envVars: loadEnvVariables(),
};
