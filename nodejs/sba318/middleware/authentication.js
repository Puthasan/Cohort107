


const authenticationMiddleware = (req, res, next) => {
  // Dummy authentication logic (for demonstration purposes)
  const isAuthenticated = true;

  if (isAuthenticated) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = authenticationMiddleware;