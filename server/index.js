import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from "mongoose";
import {validationResult} from "express-validator";

import {registerValidation} from './validations/auth.js'

import UserModel from './models/User.js'

mongoose
    .connect('mongodb+srv://AdminS:QQQwww444@pf.9ipuej5.mongodb.net/PF?retryWrites=true&w=majority')
    .then(() => console.log('DB Ok'))
    .catch((err) => console.log('DB error', err))

const app = express();

app.use(express.json());

app.post('/auth/registration', registerValidation, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            email: req.body.email,
            passwordHash,
            avatarUrl: req.body.avatarUrl,
            fullName: req.body.fullName,
        });

        const user = await doc.save();

        const token = jwt.sign(
            {
                _id: user._id,
            },
            'secretKey1234',
            {
                expressIn: '30d'
            },
            {}
        );

        res.json({
            ...user,
            token,
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось зарегистрироваться',
        })
    }
});

app.listen(3157, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server Ok')
});