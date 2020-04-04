import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Initialization
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers

app.get("/", (req, res) => {
  res.status(200).json({ message: "I am on the line!", data: req.body });
});

export default app;
