const jwt = require("jsonwebtoken");
const { jwtpass } = require("../jwt/jwtpass");
const { token_service } = require("../services/user_services");

function tokenValidation(req, res, next) {
  const authorization = req.headers.authorization;
  try {
    const verify = jwt.verify(authorization, jwtpass);

    const result = token_service(verify);
    console.log(result);

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
