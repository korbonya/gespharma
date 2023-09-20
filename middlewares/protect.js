import jwt from 'jsonwebtoken';

export const protect = async (req, res, next) => {
    const authorization = req.headers.authorization
    if (authorization && authorization.startsWith('Bearer')) {
        const token = authorization.split(' ')[1]
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decoded
            next()
        } catch (error) {
            res.status(401).send('Not authorized, token failed')
        }
    }else{
        res.status(401).send('Not authorized, no token')
    }
}