import { Router } from "express";

// Init shared
const router = Router();

// Routes
router.get("/login", (req, res) => {
  res.send("You've reached the login page!");
});

// Export
export default router;
