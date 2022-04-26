const Router = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const router = new Router();

router.post('/reg',
    [
        check('email', 'Uncur Email').isEmail(),
        check('password', 'min 4 symbol max 16 symbol ').isLength({min: 4, max: 16}),
    ],
    async (req, res) => {
        try {
            const error = validationResult(req);
            const {name, login, email, password} = req.body;

            if (!error.isEmpty()) {
                return res.status(400).json({message: 'Uncur req', error});
            }

            const checkEmail = await User.findOne({email});
            const checkLogin = await User.findOne({login});

            if (checkEmail || checkLogin) {
                return res.status(400).json({message: `Пользователь с таким : ${email} или логином ${login} уже существует`});
            }

            const hasPassword = await bcrypt.hash(password, 8);
            const user = new User({name, login, email, password: hasPassword});
            await user.save();
            return res.json({message: 'User ready'});

        } catch (e) {
            console.log(e);
            res.send({message: 'Error'});
        }
    },
);

router.post('/login',
    async (req, res) => {
        try {
            const {login, password} = req.body;
            const user = await User.findOne({login});
            if (!user){
                return res.status(404).json({message: `Пользователя с таким ${login} не существует`});
            }
            const passValid = bcrypt.compareSync(password, user.password);
            if (!passValid){
                return res.status(400).json({message: "Неверный пароль"});
            }
            const token = jwt.sign({id: user.id}, config.get('secretKey'), {expiresIn: "24h"});
            return res.json({
              token,
              user: {
                  id: user.id,
                  login: user.login,
                  email: user.email,
                  name: user.name
              }
            })

        } catch (e) {
            console.log(e);
            res.send({message: 'Error'});
        }
    },
);

module.exports = router;
