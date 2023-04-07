const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
  
  const token = await req.headers.authorization.split(' ')[1];
  
  if (!token) {
   
    console.log("missing token")
    return res.status(401).json({ message: 'Missing token' });
  }

  try {
    
    const decoded = jwt.verify(token.substring(1, token.length - 1), process.env.TOKEN_SECRET);
    req.user = decoded; 
    next(); 
  } catch (err) {
    console.log(err)
    res.status(401).json({ message: 'Invalid token' });
  }
};






module.exports = { authenticate }