const crypto = require("crypto");

function getHashpwd(password) {
  const salts = crypto.randomBytes(16).toString("hex");
  const hashedpass = crypto
    .pbkdf2Sync(password, salts, 100, 16, "SHA512")
    .toString("hex");
  console.log(salts);
  console.log(hashedpass);
  return {
    salts,
    hashedpass,
  };
}

function verifyHashpwd(hash, salts, password) {
  console.log(hash + " " + salts + " " + password);
  const hashedpass = crypto
    .pbkdf2Sync(password, salts, 100, 16, "SHA512")
    .toString("hex");
  console.log(hashedpass);
  return hashedpass == hash;
}

module.exports = {
  getHashpwd,
  verifyHashpwd,
};
