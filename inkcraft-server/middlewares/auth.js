const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
  
  const token = await req.headers.authorization.split(' ')[1];
  
  if (!token) {
    // Si aucun token n'est présent dans la requête, renvoyer une réponse d'erreur
    console.log("missing token")
    return res.status(401).json({ message: 'Missing token' });
  }

  try {
    // Vérifier la validité du token
    const decoded = jwt.verify(token.substring(1, token.length - 1), process.env.TOKEN_SECRET);
    req.user = decoded; // Ajouter les données utilisateur décodées à l'objet request
    next(); // Appeler la prochaine fonction du middleware
  } catch (err) {
    console.log(err)
    res.status(401).json({ message: 'Invalid token' });
  }
};






module.exports = { authenticate }