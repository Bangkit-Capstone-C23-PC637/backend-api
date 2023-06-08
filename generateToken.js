const jwt = require('jsonwebtoken');
const secretKey = "capstonec23pc637";

const generateToken = () => {
  const payload = { data: 'example' };
  const token = jwt.sign(payload, secretKey);
  console.log('Generated Token:', token);
  return token;
};

module.exports = generateToken;
