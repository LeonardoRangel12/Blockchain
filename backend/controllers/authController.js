const User = require ('../models/User');
const jwt = require('jsonwebtoken');


//handle erros
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {email: '', password: ''};

    if(err.message === 'incorrect email'){
        errors.email = "El email ingresado no está registrado";
    }

    if(err.message === 'incorrect password'){
        errors.email = "La contraseña es incorrecta";
    }

    if(err.code === 11000)
    {
        errors.email = 'Ya hay una cuenta con ese email';
        return errors;
    }
    if( err.message.includes('user validation failed'))
    {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

const createToken = (id) => {
    return jwt.sign({id}, 'secret', {
        expiresIn: 259200
    });
}

module.exports.signup_post = async (req, res) => {
    const { email, password,  } = req.body;
    try{
        const user = await User.create({ email,password});
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true,maxAge:  259200000});
        res.status(201).json({user: user._id});
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
};

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.login(email,password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true,maxAge:  259200000});
        res.status(200).json({user: user._id}); 
        
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
};

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1})
    res.status(200).send("Logged out succesfully");
};