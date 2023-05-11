const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) {
        return res.status(400).json({ 'message': 'User or password is missign' });
    }

    // check for duplicate user names in database
    const duplicate = usersDB.users.find(dupUsr => dupUsr.username === user);
    if (duplicate) {
        return res.sendStatus(409)
    }

    try {
        // encrypting the password
        const hashedPwd = await bcrypt.hash(pwd, 10);

        // store the new user
        const newUser = { 'username': user, 'password': hashedPwd };
        usersDB.setUsers([...usersDB.users, newUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );
        console.log(usersDB.users);
        res.status(201).json({ 'success': `New user ${user} have been created.` });

    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

module.exports = { handleNewUser };