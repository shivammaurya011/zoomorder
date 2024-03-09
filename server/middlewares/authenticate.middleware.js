const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Missing token' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

module.exports = { authenticateUser };
