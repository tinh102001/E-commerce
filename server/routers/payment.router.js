import express from "express";

import { paymentCtrl } from "../controllers/payment.controller.js";
import { auth } from "../middleware/auth.js";
import { authAdmin } from "../middleware/authAdmin.js";

const router = express.Router();

router.get("/payment", auth, authAdmin, paymentCtrl.getPayments);

router.post("/payment", auth, paymentCtrl.createPayment);

export default router;
