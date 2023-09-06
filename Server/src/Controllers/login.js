const users = require("../Utils/users")

const login = (req, res) => {
    const { email, password } = req.query;

    const userFound = users.find((user) => user.email === email && user.password === password)
    // Primera forma
    return userFound
    ? res.status(200).json({ access: true})
    : res.status(200).json({ access: false})

    // Segunda forma
    // if(userFound) return res.status(200).json({ access: true})
    // return res.status(404).json({access: false})
};

module.exports = {
    login
};
