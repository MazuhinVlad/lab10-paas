const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: process.env.WELCOME_MSG || "Hello from Railway!",
    version: process.env.APP_VERSION || "1.0.0",
    env: process.env.NODE_ENV || "development"
  });
});

app.get("/about", (req, res) => {
  res.json({
    name: "Lab 10 — PaaS Deployment",
    student: process.env.STUDENT_NAME || "Unknown",
    platform: "Railway"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});