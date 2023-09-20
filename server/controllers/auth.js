import User from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const createUser = async (req, res) => {
    const {password, ...rest} = req.body
    const salt =await bcrypt.genSalt(10)
    const hashPassword= await bcrypt.hash(password, salt)
    const user = new User({password: hashPassword, ...rest})
    try {
        const savedUser= await user.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(409).send(error.message)
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).send('invalid credentials')
        }else{
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).send('Invalid credentials')
            }else{
                const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
                res.status(200).json({token, user})
            }
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

