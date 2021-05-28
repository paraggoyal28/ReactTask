import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const login = async (req, res) => {
    const { apiKey, name } = req.body;
    try {
        const existingUser = await User.findOne({ apiKey });

        if (!existingUser) {
            return res.status(404).json({ message: "User doesn't exist." });
        }

        const token = jwt.sign({ name }, process.env.SECRET, { expiresIn: "1h" });

        return res.status(200).json({ token: { token, name }, image: existingUser.image });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}