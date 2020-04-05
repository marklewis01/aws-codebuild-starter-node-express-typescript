import { Router } from "express";

// sub-routers
import AuthRouter from "./auth.route";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/auth", AuthRouter);

// Export the base-router
export default router;
