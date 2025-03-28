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

const token_service = async (data) => {
  console.log(data);
  const result = await users.findOne({
    where: {
      user_id: data.user_id,
      // email: data.email,
    },
  });
  return result;
};

const findUserid = async (data) => {
  const result = await users.findOne({
    where: {
      user_id: data,
    },
    attributes: ["email", "firstname", "lastname"],
  });
  return result;
};

const update = async (data) => {
  const { salts, hashedpass } = getHashpwd(data.password);
  try {
    const result = await users.update(
      {
        email: data.email,
        password: salts + ":" + hashedpass,
      },
      {
        where: {
          user_id: data.id,
        },
      }
    );
    return result;
  } catch (err) {
    return false;
  }
};

const remove = async (data) => {
  const result = await users.destroy({
    where: {
      user_id: data,
    },
  });
  return result;
};

module.exports = {
  create,
  findOne,
  token_service,
  update,
  remove,
  findUserid,
};
