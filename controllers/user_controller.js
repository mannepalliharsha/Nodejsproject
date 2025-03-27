const {
  create,
  findOne,
  update,
  remove,
  findUserid,
} = require("../services/user_services");



const { verifyHashpwd } = require("../passwordhashing/hashing");

const jwt = require("jsonwebtoken");
const { jwtpass } = require("../jwt/jwtpass");
const addUser = async (req, res) => {
  const user = await create(req.body);

  const token = jwt.sign(
    { user_id: user.user_id, email: req.body.email },
    jwtpass
  );
  res.status(200).json({
    msg: "data inserted successfully",
    token,
  });
  return;
};

const find = async (req, res) => {
  const result = await findOne(req.body);
  console.log(result);
  if (result == null) {
    res.status(404).json({
      msg: "email is not exist",
    });
    return;
  }
  const password = result.get("password");
  console.log(password);
  const arr = password.split(":");
  console.log(arr);
  const value = verifyHashpwd(arr[1], arr[0], req.body.password);
  if (!value) {
    res.status(404).json({
      msg: " wrongpassword",
    });
    return;
  }
  const user_id = result.get("user_id");

  console.log(user_id);
  const token = jwt.sign({ user_id: user_id, email: req.body.email }, jwtpass);
  res.status(200).json({
    msg: "sigin successfully",
    token,
  });
  return;
};

const updateUser = async (req, res) => {
  const result = await update(req.body);
  console.log(result);
  console.log(result.length);
  if (result[0] == 0) {
    res.status(404).json({
      msg: "user_id is not exist",
    });
    return;
  }
  res.status(200).json({
    msg: "updated successfully",
  });
};

const deleteUser = async (req, res) => {
  console.log(req.params.id);
  const result = await remove(req.params.id);
  console.log(result);
  if (!result) {
    res.status(404).json({
      msg: "user is not exist please signup to proceed",
    });
    return;
  } else {
    res.status(200).json({
      msg: "deleted succesfully ",
    });
  }
};

const getUserId = async (req, res) => {
  const result = await findUserid(req.params.id);
  if (!result) {
    res.status(404).json({
      msg: "userId is not exist  please signup",
    });
    return;
  }
  res.status(200).json({
    data: result,
  });
};

module.exports = {
  addUser,
  find,
  updateUser,
  deleteUser,
  getUserId,
};
