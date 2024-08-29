import { Request, Response } from "express"
import prisma from "../db/prisma";
import bcryptjs from 'bcryptjs'
import generateToken from "../utils/generateToken";

export const signup = async (req: Request, res: Response) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

		if (!fullName || !username || !password || !confirmPassword || !gender) {
			return res.status(400).json({ error: "Please fill in all fields" });
		}

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

        const user = await prisma.user.findUnique({ where: { username }});

        if(user) {
            return res.status(400).json({ error: 'Username already exists'});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = await prisma.user.create({
            data: {
                fullName,
                username,
                password: hashedPassword,
                gender,
                profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
            },
        });

        if(newUser) {
            generateToken(newUser.id, res);

            res.status(201).json({
                id: newUser.id,
				fullName: newUser.fullName,
				username: newUser.username,
				profilePic: newUser.profilePic,
            });
            console.log(`${newUser.id} signed up`)
        } else {
            res.status(400).json({ error: 'Invalid user data' });
            }
    } catch(err: any) {
        console.log('Error in signup controller', err.message);
        res.status(500).json({ error: '' })
    }
}; 

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await prisma.user.findUnique({where: {username}});

        if(!user) {
            return res.status(400).json({error: 'Invalid credentials'});
        }

        const isPassword = await bcryptjs.compare(password, user.password);

        if(!isPassword) {
            return res.status(400).json({error: 'Invalid credentials'});
        }

        generateToken(user.id, res);
        res.status(201).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
        console.log(`${user.id} logged in`)
    } catch(err: any) {
        console.log('Error in signup controller', err.message);
        res.status(500).json({ error: '' })
    }
};

export const logout = async (req: Request, res: Response) => {
    try {
        res.cookie('jwt', "", {maxAge: 0});
        res.status(200).json({message: 'Logged out successfully'});
    } catch(err: any) {
        console.log('Error in Input controller', err.message)
        res.status(500).json({error: 'Internal Server Error'})
    }
};

export const getMe = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findUnique({where: {id: req.user.id}});

        if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		res.status(200).json({
			id: user.id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
        });
    } catch(err: any) {
        console.log('Error in Input controller', err.message)
        res.status(500).json({error: 'Internal Server Error'})
    }
};