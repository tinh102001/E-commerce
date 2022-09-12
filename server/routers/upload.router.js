import express from "express";
import cloudinary from "cloudinary";

import { auth } from "../middleware/auth.js";
import { authAdmin } from "../middleware/authAdmin.js";
import { uploadCtrl } from "../controllers/upload.controller.js"

const router = express.Router();

cloudinary.config({
    cloud_name: "ductinh",
    api_key: "532672612447654",
    api_secret: "qHwx8cnQFQBkQ5-sYbUc5W9_6dI"
})


// Upload image only admin can use
router.post('/upload', uploadCtrl.upload);

// Delete image only admin can use
router.post('/destroy', uploadCtrl.destroy)

export default router;