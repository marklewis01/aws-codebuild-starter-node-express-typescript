import express from "express";
import cors from "cors";
import helmet from "helmet";
import fs from "fs";

import BaseRouter from "./routes";

const html = fs.readFileSync("./src/public/index.html");

/**
 * Init Express
 */
const app = express();

/**
 * Add middleware/settings/routes to express.
 */
app.use(cors()); // for testing only - make more specific for production app
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", BaseRouter); // API Endpoint

/**
 * Default root response
 */
app.use("/", (req, res) => {
  res.writeHead(200);
  res.write(html);
  res.end();
});

/**
 * Export Express instance
 */
export default app;
