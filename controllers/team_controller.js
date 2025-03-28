const {
  create,
  update,
  remove,
  findOne,
  findbyid,
} = require("../services/teams_services");

const { findOrgadmin } = require("../services/org_services");

const create_controller = async (req, res) => {
  const value = await findOrgadmin(req.body.id);
  if (value == null) {
    res.status(404).json({
      msg: "org_id is not exist please provide the organization details. ",
    });
    return;
  }
  req.body.org_id = value.get("org_id");
  const result = await create(req.body);
  if (!result) {
    res.status(404).json({
      msg: "Already teamAdmin is present",
    });
    return;
  }
  res.status(200).json({
    msg: "Data inserted sucessfully",
  });
};

const update_controller = async (req, res) => {
  const value = await update(req.body);
  console.log(value + "heyyy");
  if (value == null) {
    res.status(500).json({
      msg: "please create team and then update",
    });
    return;
  }
  res.status(200).json({
    msg: "updated Successfully",
  });
};

const delete_controller = async (req, res) => {
  const value = await remove(req.body.id);
  if (!value) {
    res.status(404).json({
      msg: "team id is not exist we can't delete",
    });
    return;
  }
  res.status(200).json({
    msg: "deleted successfully",
  });
};

const get_controller = async (req, res) => {
  console.log(req.params.id);
  console.log("hello");
  if (req.params.id !== "null") {
    const result = await findbyid(req.params.id);
    if (result == null) {
      res.status(404).json({
        msg: "teamid is not exist",
      });
      return;
    } else {
      res.status(200).json({
        msg: "fetched",
        result,
      });
    }
  } else {
    const result = await findOne(req.body.id);
    console.log(result);
    if (result == null) {
      res.status(404).json({
        msg: "teamid is not exist",
      });
      return;
    } else {
      res.status(200).json({
        msg: "fetched",
        result,
      });
    }
  }
};

module.exports = {
  create_controller,
  update_controller,
  delete_controller,
  get_controller,
};
