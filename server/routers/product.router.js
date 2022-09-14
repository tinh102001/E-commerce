import express from "express";

import { productCtrl } from "../controllers/product.controller.js";
import { auth } from "../middleware/auth.js";
import { authAdmin } from "../middleware/authAdmin.js";

const router = express.Router();

router.get("/products", productCtrl.getProducts);

router.post("/products", auth, authAdmin, productCtrl.createProduct);

router.delete("/products/:id", auth, authAdmin, productCtrl.deleteProduct);

router.put("/products/:id", auth, authAdmin, productCtrl.updateProduct);

export default router;