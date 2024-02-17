const jwt = require('jsonwebtoken');

const secretKey = 'ashi@2003';

const authenticateUser = (req, res, next) => {

  const token = req.headers.authorization;

  
  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token is required.' });
  }

  try {
   
    const decodedToken = jwt.verify(token, secretKey);
    
    req.user = decodedToken;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = authenticateUser;
