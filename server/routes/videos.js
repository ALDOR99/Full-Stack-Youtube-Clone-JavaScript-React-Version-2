import express from "express";
import { addVideo } from "../controllers/video.js";
// ---------------------------------
const router = express.Router();

// create a video
router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, addVideo);
router.delete("/:id", verifyToken, addVideo);
router.get("/find/:id", addVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", sub);
// ---------------------------------
export default router;
