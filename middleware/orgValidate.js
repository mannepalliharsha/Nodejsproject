const jwt = require("jsonwebtoken");
const { jwtpass } = require("../jwt/jwtpass");
const { findOrgadmin } = require("../services/org_services");
async function orgValidate(req, res, next) {
  const authorization = req.headers.authorization;
  try {
    const verify = jwt.verify(authorization, jwtpass);

    console.log(verify);
    const result = await findOrgadmin(verify.user_id);
    console.log(result);
    if (result == null) {
      res.status(404).json({
        msg: "org_id is not exist please signup to proceed",
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
  orgValidate,
};
