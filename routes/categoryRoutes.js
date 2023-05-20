import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategroyController,
} from "../controllers/categroyController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update Category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategroyController
);
// get all category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//detele category
//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
