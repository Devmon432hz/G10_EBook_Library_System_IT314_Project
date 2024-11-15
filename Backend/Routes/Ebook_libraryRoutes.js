const express = require(`express`);
const router = express.Router();
const authController = require("../Controllers/AuthController");
const dashboardController = require("../Controllers/DashboardController");

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/verifyOTP', authController.verifyOTP);
router.post('/forgotPassword', authController.forgotPassword);
router.post('/resetPassword', authController.resetPassword);
router.post('/resendOTP', authController.resendOTPVerificationEmail);
router.post('/addToWishlist', dashboardController.addToWishlist);
router.post('/rmFromWishlist', dashboardController.rmFromWishlist);
router.get('/readHistory/:username', dashboardController.getMyReadHistory);
router.get("/myProfile/:username", dashboardController.getMyProfile);

// router.post('/addHistory', dashboardController.addToHistory); // Just for testing not actual route



module.exports = router;