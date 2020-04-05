import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import BaseRouter from "./routes";

// Initialization
const app = express();

// Middlewares
app.use(cors()); // for testing only - make more specific for production app
app.use(bodyParser.json());
app.use("/api", BaseRouter);

// Express route handlers

app.get("/", (req, res) => {
  res.status(200).json({ message: "I am on the line!" });
});

app.post("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Posted successfully", data: req.body, version: 3 });
});

export default app;
