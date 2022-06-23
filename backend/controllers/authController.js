const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

//Register User     => /api/v1/register ================================================================================
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "image-public-id",
      url: "image-url.png",
    },
  });

  sendToken(user, 200, res);
});

//Login User     => /api/v1/login=======================================================================================
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  //Check if email and password are entered by the user
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Username and Password"), 400);
  }

  //FInding User in the Database
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  //Checks if Password is Correct
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  sendToken(user, 200, res);
});

//Forgot Password => /api/v1/password/forgot============================================================================
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("User Not Found With This Email", 404));
  }

  //Get Reset Token
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  //Create Reset Password URL
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const messsage = `Your Password Reset Token is as Follows:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Kraken PC House Password Recovery",
      messsage,
    });
    res.status(200).json({
      success: true,
      messsage: `Email Sent To : ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.messsage, 500));
  }
});

//Reset Password => /api/v1/password/reset/:token=======================================================================
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  //Hash URL Token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ErrorHandler("Reset Token Invalid or Has been Expired"));
  }
  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  //Setup New Password
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  sendToken(user, 200, res);
});

//Get Currently Logged In User Details  => /api/v1/me
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});

//Logout User     => /api/v1/logout=====================================================================================
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    messsage: "Logged out successfully",
  });
});
