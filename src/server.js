// src/server.js
const mongoose = require("mongoose");
const { envVars } = require("./app/config/env");
const app = require("./app");

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DATABASE_URL);
    console.log("🟢 Database Connected");

    if (process.env.NODE_ENV !== "production") {
      app.listen(envVars.PORT, () => {
        console.log(`Server is listening on PORT: ${envVars.PORT}`);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

startServer();

// 👇 This is what Vercel needs
module.exports = app;
