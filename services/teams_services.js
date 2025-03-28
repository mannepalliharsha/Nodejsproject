const { teams } = require("../models");

const create = async (data) => {
  try {
    await teams.create({
      team_name: data.team_name,
      org_id: data.org_id,
      team_admin: data.id,
    });
    return true;
  } catch (err) {
    return false;
  }
};

const update = async (data) => {
  console.log(data);
  try {
    const result = await teams.update(
      {
        team_name: data.team_name,
      },
      {
        where: {
          team_admin: data.id,
        },
      }
    );
    return result;
  } catch (err) {
    return null;
  }
};

const findOne = async (id) => {
  console.log(id);
  const result = await teams.findOne({
    where: {
      team_admin: id,
      // email: data.email,
    },
  });
  return result;
};

const findbyid = async (id) => {
  const result = await teams.findOne({
    where: {
      team_id: id,
    },
  });
  return result;
};

const remove = async (id) => {
  try {
    const result = await teams.destroy({
      where: {
        team_admin: id,
      },
    });
    return result;
  } catch (err) {
    return 0;
  }
};

module.exports = {
  create,
  update,
  findOne,
  remove,
  findbyid,
};
