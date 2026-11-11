import { Router } from "express";
import { asyncHandler } from "../../shared/middlewares/asyncHandler";
import { GenreController } from "../genres/genre.controller";

const router = Router();
const genreController = new GenreController();

router.post("/", asyncHandler(genreController.create));
router.get("/", asyncHandler(genreController.findAll));
router.get("/:id", asyncHandler(genreController.findById));
router.delete("/:id", asyncHandler(genreController.delete));

export default router;
