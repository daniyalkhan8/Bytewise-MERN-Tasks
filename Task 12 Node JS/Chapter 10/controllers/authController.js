const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');

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
        res.json({ 'Success': 'Login successful' });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };