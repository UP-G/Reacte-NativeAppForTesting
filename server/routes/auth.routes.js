const Router = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');

const router = new Router();
//Сделать JWT токены
router.post('/regUser',
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

module.exports = router;
