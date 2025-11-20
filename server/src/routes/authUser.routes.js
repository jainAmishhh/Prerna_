// import express from "express";
// import {
//   phoneLogin,
//   phoneSignup,
//   sendOtp,
//   verifyOtp,
// } from "../controllers/authUser.controllers.js";

// const router = express.Router();

// // ---- AUTH ROUTES ----
// router.post("/login", phoneLogin);        // Login using phone + password
// router.post("/signup", phoneSignup);      // Signup using phone + password

// // ---- OTP ROUTES ----
// router.post("/send-otp", sendOtp);        // Send OTP to phone
// router.post("/verify-otp", verifyOtp);    // Verify OTP + login/signup

// export default router;


import express from "express";
import {
  phoneLogin,
  phoneSignup,
  sendOtp,
  verifyOtp
} from "../controllers/authUser.controllers.js";

const router = express.Router();

router.post("/signup", phoneSignup);
router.post("/login", phoneLogin);
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

export default router;
