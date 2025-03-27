const { create, update, remove, findOne } = require("../services/org_services");

const create_controller = async (req, res) => {
  const result = await create(req.body.org_name, req.body.id);
  console.log(result);
  if (!result) {
    res.status(404).json({
      msg: "Duplicate key entry",
    });
    return;
  } else {
    res.status(200).json({
      msg: "Data inserted successfully",
    });
  }
};

const update_controller = async (req, res) => {
  const result = await update(req.body.org_name, req.body.id);
  if (!result) {
    res.status(404).json({
      msg: "organization_id is not exist",
    });
    return;
  } else {
    res.status(200).json({
      msg: "updated succesfully",
    });
    return;
  }
};

const delete_controller = async (req, res) => {
  const result = await remove(req.body.id);
  console.log(result);
  if (!result) {
    res.status(404).json({
      msg: "org_id is not exist",
    });
    return;
  } else {
    res.status(200).json({
      msg: "deleted successfully",
    });
    return;
  }
};

const get_controller = async (req, res) => {
  const result = await findOne(req.params.id);
  if (result == null) {
    res.status(404).json({
      msg: " org_id is not exist",
    });
    return;
  }

  res.status(200).json({
    msg: result,
  });
  return;
};

module.exports = {
  create_controller,
  update_controller,
  delete_controller,
  get_controller,
};
