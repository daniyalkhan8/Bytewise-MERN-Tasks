const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) {
        return res.sendStatus(401);
    }
    const refreshToken = cookies.jwt;

    // Checking if the user exist
    const findUser = usersDB.users.find(usr => usr.refreshToken === refreshToken);
    if (!findUser) {
        return res.sendStatus(403);
    }

    // Evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECERET,
        (err, decoded) => {
            if (err || findUser.username !== decoded.username) {
                return res.sendStatus(403);
            }
            const accessToken = jwt.sign(
                { 'username': decoded.username },
                process.env.ACCESS_TOKEN_SECERET,
                { expiresIn: '30s' }
            );
            res.json({ accessToken });
        }
    );
}

module.exports = { handleRefreshToken };