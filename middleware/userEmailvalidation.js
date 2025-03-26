const { users } = require("../models");
async function validate(req, res, next) {
  const result = await users.findOne({
    where: {
      email: req.body.email,
    },
  });
  console.log(result);
  if (result == null) {
    next();
  } else {
    res.status(404).json({
      msg: "email already exist",
    });
    return;
  }
}

module.exports = {
  validate,
};
