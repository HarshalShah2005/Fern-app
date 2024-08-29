"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authroute_1 = __importDefault(require("./routes/authroute"));
const messageroute_1 = __importDefault(require("./routes/messageroute"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/auth', authroute_1.default);
app.use('/api/messages', messageroute_1.default);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
