import jwt from 'jsonwebtoken';


const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ Message: "Token is required, please provide it." });
    } else {
      jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
        if (err) {
          return res.status(403).json({ Message: "Authentication error, invalid token." });
        } else {
          req.user_id = decoded.user_id;
          req.position = decoded.position;
          next();
        }
      });
    }
  };


export default verifyUser;

  