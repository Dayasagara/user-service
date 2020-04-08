const mongoose = require('mongoose');
mongoose.set('debug', true);
const User = mongoose.model("users");

const getUser =  (userId) => {
    const user = User.findOne({ "_id": userId , "IsDeleted":false});
    return user;
}

async function registerUser(userData) {
    const user = new User(userData);
    await user.save();
}

function userExists(email){
    const _id = User.findOne({email:email, IsDeleted:false}, {_id:1})
    if (_id){
        return true
    }
    return false
}

function authenticateUser(email, password){
    const user = User.findOne({"email":email, "encryptedPwd":password, "IsDeleted":false}, {"email":1, "encryptedPwd":1, "role":1})
    return user
}

async function updateUser(userId, user){
    const result = User.updateOne({_id:userId},{$set:{phoneNo:user.phoneNo, email:user.email, company:user.company}} )
    return result
}

async function deleteUser(userId){
    const result = User.updateOne({_id:userId},{$set: {IsDeleted:true}})
}

module.exports={getUser, registerUser,updateUser, authenticateUser, userExists, deleteUser};