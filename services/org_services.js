const { organizations } = require("../models");

const create = async (org_name, org_id) => {
  console.log(org_id + "hello");

  try {
    const result = await organizations.create({
      org_name: org_name,
      org_admin: org_id,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const update = async (data, id) => {
  try {
    await organizations.update(
      {
        org_name: data,
      },
      {
        where: {
          org_admin: id,
        },
      }
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const findOne = async (id) => {
  console.log(id);
  const result = await organizations.findOne({
    where: {
      org_id: id,
    },
    attributes: ["org_id", "org_admin", "org_name"],
  });
  return result;
};

const remove = async (id) => {
  try {
    const result = await organizations.destroy({
      where: {
        org_admin: id,
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
};
