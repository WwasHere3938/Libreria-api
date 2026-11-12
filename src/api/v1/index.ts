import { Router } from "express";
import categoryRoutes from "../../modules/categories/categories.routes";
import authorRoutes from "../../modules/authors/author.routes";
import bookRoutes from "../../modules/books/book.routes";
import loanRoutes from "../../modules/loans/loan.routes";

const router = Router();

router.use("/loans", loanRoutes);
router.use("/books", bookRoutes);
router.use('/category', categoryRoutes);
router.use('/authors', authorRoutes);

export default router;