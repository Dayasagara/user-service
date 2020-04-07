const mongoose = require('mongoose');
mongoose.set('debug', true);
const User = mongoose.model("users");

const getUser =  (userId) => {
    return User.find({ "_id": userId });
}

async function registerUser(userData) {
    const user = new User(userData);
    await user.save();
}

module.exports={getUser, registerUser};