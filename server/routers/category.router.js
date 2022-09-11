import express from "express";

import { categoryCtrl } from "../controllers/category.controller.js";
import { auth } from "../middleware/auth.js";
import { authAdmin } from "../middleware/authAdmin.js";

const router = express.Router();

router.get("/category", categoryCtrl.getCategories);

router.post("/category", auth, authAdmin, categoryCtrl.createCategory);

router.delete("/category/:id", auth, authAdmin, categoryCtrl.deleteCategory);

router.put("/category/:id", auth, authAdmin, categoryCtrl.updateCategory);

export default router;