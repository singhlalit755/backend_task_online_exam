var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
let userSchema = new Schema({
    
    
    fullName: {
        type: String,
        default:""
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    hash: { type: String, select: false },
    salt: { type: String, select: false }
},
    {
        timestamps: true,
    });


//Hashing the password before storing it
userSchema.methods.setPassword = function (password) {

    this.salt = bcrypt.genSaltSync(10);
    // Hash the password with the salt
    this.hash = bcrypt.hashSync(password, this.salt);
};

// Checking the password for login
userSchema.methods.validPassword = function (password) {

    return bcrypt.compareSync(password, this.hash); // true

};

// Email validation
userSchema.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
}, 'Please enter a valid email address.');

var User = mongoose.model('User', userSchema);

module.exports = User;