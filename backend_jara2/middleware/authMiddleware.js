const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token) {
       jwt.verify(token, 'secret', (err, decodedToken) => {
        if(err) {
            res.status(401);
        }
        else
        {
            next();
        }
       })
    }
    else
    {
        res.status(401);
    }
}

module.exports = {requireAuth};