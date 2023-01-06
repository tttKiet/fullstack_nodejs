import userService from "../services/userService";

class ApiController {
  // [post] /api/login
  async handleLogin(req, res, next) {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
      return res.status(500).json({
        errCode: 1,
        message: "Missing or invalid email",
      });
    }

    const userData = await userService.handleLogin(email, password);

    res.status(200).json({
      errCode: userData.errCode,
      message: userData.errMessage,
      user: userData.user ? userData.user : {},
    });
  }
}

export default new ApiController();
