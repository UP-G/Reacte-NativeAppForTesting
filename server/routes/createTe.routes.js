const Router = require('express');
const Test = require('../models/Test');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');

const router = new Router();

router.post('/registrationTest',
    [
        check('name', 'min 4 symbol max 32 symbol ').isLength({min: 4, max: 32}),
    ],
    async (req, res) => {
        try {
            const error = validationResult(req);
            const {name, dateCreate, userCreatedId} = req.body;

            if (!error.isEmpty()) {
                return res.status(400).json({message: 'Некорректный запрос', error});
            }

            // if (checkEmail || checkLogin) {
            //     return res.status(400).json({message: ``});
            // }

            const test = new Test({name, dateCreate, userCreatedId});
            await test.save();
            return res.json({message: 'Test ready'});

        } catch (e) {
            console.log(e);
            res.send({message: 'Error'});
        }
    },
);

module.exports = router;
