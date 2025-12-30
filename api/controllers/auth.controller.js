import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user and save to database
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        console.log("User created:", newUser.username);
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        console.error("Register error:", error.message);
        res.status(500).json({ message: "Failed to create user!" });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user exists
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid username or password!" });
        }

        // Check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid username or password!" });
        }

        // Generate JWT token
        const age = 1000 * 60 * 60 * 24 * 7; // 7 days
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: age }
        );

        // Send token as HTTP-only cookie
        const { password: userPassword, ...userInfo } = user;
        
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age,
            // secure: true, // Enable in production with HTTPS
        })
        .status(200)
        .json({ message: "Login successful!", user: userInfo });

    } catch (error) {
        console.error("Login error:", error.message);
        res.status(500).json({ message: "Failed to login!" });
    }
};

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout successful!" });
};
