const jwt = require("jsonwebtoken");
const { jwtpass } = require("../jwt/jwtpass");
const { findOne } = require("../services/teams_services");
const teamValidation = async (req, res, next) => {
  const authorization = req.headers.authorization;
  try {
    const verify = jwt.verify(authorization, jwtpass);

    console.log(verify);
    const result = await findOne(verify.user_id);
    console.log(result);
    if (result == null) {
      res.status(404).json({
        msg: "team_admin is not exist",
      });
      return;
    }
    req.body.id = verify.user_id;
    console.log("heyyyy");
    next();
  } catch (err) {
    res.status(404).json({
      msg: err,
    });
    return;
  }
};

module.exports = {
  teamValidation,
};
