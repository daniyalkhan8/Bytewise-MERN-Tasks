const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) {
        return res.status(400).json({ 'message': 'User or password is missign' });
    }

    // Checking if the user exist
    const findUser = usersDB.users.find(usr => usr.username === user);
    if (!findUser) {
        return res.status(401).json({ 'message': 'User doesnot exist. Please create an account first.' });
    }

    // Evaluate password
    const decryptPwd = await bcrypt.compare(pwd, findUser.password);
    if (decryptPwd) {
        const accessToken = jwt.sign(
            { 'username': findUser.username },
            process.env.ACCESS_TOKEN_SECERET,
            { expiresIn: '30s' }
        );
        const refreshToken = jwt.sign(
            { 'username': findUser.username },
            process.env.REFRESH_TOKEN_SECERET,
            { expiresIn: '1d' }
        );

        // Saving refresh token with current user
        const otherUsers = usersDB.users.filter(usr => usr.username !== findUser.username);
        const currentUser = { ...findUser, refreshToken };
        usersDB.setUsers([...otherUsers, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };