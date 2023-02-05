"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
//configs
dotenv_1.default.config();
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello my friend, from the mighty express server');
});
//connection to server
app.listen(port, () => {
    console.log(`Server runs on the localhost:${port}`);
});
//# sourceMappingURL=server.js.map