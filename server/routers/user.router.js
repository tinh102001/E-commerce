import express from "express";

import { userCtrl } from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login);

router.get("/logout", userCtrl.logout);

router.get("/refresh_token", userCtrl.refreshToken);

router.get("/infor", auth, userCtrl.getUser);

router.patch('/addcart', auth, userCtrl.addCart);

router.get('/history', auth, userCtrl.history);

export default router;
