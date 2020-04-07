const repository = require('../dbRepo/repository')
var md5 = require('md5');

exports.pingHandler = async (req, res) => {
    res.send({ "Status": "200 OK" })
}

exports.getHandler = async (req, res) => {
    try {
        console.log(req.params.userId)
        const user = await repository.getUser(req.params.userId);        
        res.send(user);
    }
    catch (err) {
        res.send(err);
    }
}

exports.insertHandler = async (req, res) => {
    try {
        req.body.encryptedPwd = md5(req.body.encryptedPwd )
        await repository.registerUser(req.body);
        res.set({
            'Content-Type': 'application/json',
            'Status' : 201})
        res.send({ "code": 201, "message":"User created successfully"})
    } catch (err) {
        console.log(`Error in creating user`);
        console.log(err);
        res.status(405).json({code: 405,  message:"Couldn't create user"})
    }
}

