"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = exports.logout = exports.login = exports.signup = void 0;
const prisma_1 = __importDefault(require("../db/prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generateToken_1 = __importDefault(require("../utils/generateToken"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: "Please fill in all fields" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }
        const user = yield prisma_1.default.user.findUnique({ where: { username } });
        if (user) {
            return res.status(400).json({ error: 'Username already exists' });
        }
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const newUser = yield prisma_1.default.user.create({
            data: {
                fullName,
                username,
                password: hashedPassword,
                gender,
                profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
            },
        });
        if (newUser) {
            (0, generateToken_1.default)(newUser.id, res);
            res.status(201).json({
                id: newUser.id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
            console.log(`${newUser.id} signed up`);
        }
        else {
            res.status(400).json({ error: 'Invalid user data' });
        }
    }
    catch (err) {
        console.log('Error in signup controller', err.message);
        res.status(500).json({ error: '' });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield prisma_1.default.user.findUnique({ where: { username } });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const isPassword = yield bcryptjs_1.default.compare(password, user.password);
        if (!isPassword) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        (0, generateToken_1.default)(user.id, res);
        res.status(201).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
        console.log(`${user.id} logged in`);
    }
    catch (err) {
        console.log('Error in signup controller', err.message);
        res.status(500).json({ error: '' });
    }
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.cookie('jwt', "", { maxAge: 0 });
        res.status(200).json({ message: 'Logged out successfully' });
    }
    catch (err) {
        console.log('Error in Input controller', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.logout = logout;
const getMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.default.user.findUnique({ where: { id: req.user.id } });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    }
    catch (err) {
        console.log('Error in Input controller', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getMe = getMe;
