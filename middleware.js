const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const generateToken = require('./generateToken');

const secretKey = "capstonec23pc637";

const authenticateToken = (req, res, next) => {
  // Get token from header authorization
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
};

const generateBearerToken = (req, res) => {
  const token = generateToken();
  res.json({ token });
};

module.exports = {
  secretKey,
  authenticateToken,
  generateBearerToken,
};
