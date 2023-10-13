const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');   
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true,
      },
    pubKey: {
        type: String,
        required: [true, "Public Key not retrieved."],
    },
    imageUrl: {
        type: String,
        required: [true, "image required."] ,
    },
    country: {  
        type: String,
        required: [true, "Country required."] ,
    },
    name: {
        type: String,
        required: [true, "Name required."] ,
    },
    lastname:{
        type: String,
        required: [true, "Lastname required."],
    },
    username: {
        type: String,
        required: [true, "Username required."],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email required."] ,
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Invalid email.']
    },
    password: {
        type: String,
        required: [true, "Password required."],
        minLength:[6, "Password must be at least 6 characters long."],
    }
});

userSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.statics.login = async function(email, password){
    const user  = await this.findOne({email});
    if(user)
    {
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error ('incorrect email');
}

const User = mongoose.model('user', userSchema);

module.exports = User;