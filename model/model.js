const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const address = new Schema(
    {
        addressLine:{ type: String, required: true },
        city:{ type: String, required: true },
        state:{ type: String, required: true },
        pinCode:{ type: Number, required: true },
    }
)

const usersSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        phoneNo: { type: String, required: true },
        email: { type: String, required: true },
        role:{type: String, enum : ['admin', 'user']},
        company:{type:String, required:false},
        address:{type:address, required:true},
        encryptedPwd:{type:String, required:true},
        IsDeleted : {
            type : Boolean,
            default : false
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("users", usersSchema);