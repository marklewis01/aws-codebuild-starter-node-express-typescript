import { Router } from "express";

import AuthRouter from "./auth.route";

// Init router
const router = Router();

/**
 * Child Routes
 */
router.use("/auth", AuthRouter);

/**
 * Default handler - mainly for testing
 */
router.get("/", (req, res) => {
  res.status(200).json({ message: "I am on the line!" });
});

router.post("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Posted successfully", data: req.body, version: 4 });
});

/**
 * Export base-router
 */
export default router;
