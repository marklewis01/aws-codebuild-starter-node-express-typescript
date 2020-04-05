import express from "express";
import cors from "cors";
import helmet from "helmet";

import BaseRouter from "./routes";

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
 * Export Express instance
 */
export default app;
