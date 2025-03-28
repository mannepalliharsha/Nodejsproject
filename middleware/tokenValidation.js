const jwt = require("jsonwebtoken");
const { jwtpass } = require("../jwt/jwtpass");
const { token_service } = require("../services/user_services");

async function tokenValidation(req, res, next) {
  const authorization = req.headers.authorization;
  try {
    const verify = jwt.verify(authorization, jwtpass);

    console.log(verify);
    const result = await token_service(verify);
    console.log(result);
    if (result == null) {
      res.status(404).json({
        msg: "user_id is not exist please signup to proceed",
      });
      return;
    }
    req.body.id = verify.user_id;
    next();
  } catch (err) {
    res.status(404).json({
      msg: err,
    });
    return;
  }
}

module.exports = {
  tokenValidation,
};
