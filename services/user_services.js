const { users } = require("../models");
const jwt = require("jsonwebtoken");
const { getHashpwd } = require("../passwordhashing/hashing");
const create = async (data) => {
  const { salts, hashedpass } = getHashpwd(data.password);
  const result = await users.create({
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    password: salts + ":" + hashedpass,
  });
  return result;
};

const findOne = async (data) => {
  const result = await users.findOne({
    where: {
      email: data.email,
    },
    attributes: ["user_id", "password"],
  });
  return result;
};

module.exports = {
  create,
  findOne,
};
