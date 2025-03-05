"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const interface_1 = require("./interface");
const contractService_1 = require("./contractService");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT;
/*app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})*/
const contract = new contractService_1.ContractService();
app.get('/', (req, res) => {
    res.json({
        name: "Teste"
    });
});
app.get('/balance/:wallet', async (req, res) => {
    const response = {
        status: interface_1.Status.OK,
        data: {}
    };
    try {
        const wallet = req.params.wallet;
        console.log(wallet);
        const balance = await contract.getBalance(wallet);
        response.data = String(balance);
    }
    catch (err) {
        console.log(err);
        response.status = interface_1.Status.ERROR;
        response.error = err.message;
    }
    res.json(response);
});
app.get('/transfer/:wallet', async (req, res) => {
    const response = {
        status: interface_1.Status.OK,
        data: {}
    };
    try {
        const wallet = req.params.wallet;
        const tx = await contract.transferUser(wallet);
        response.data = tx;
    }
    catch (err) {
        response.error = err.message;
        response.status = interface_1.Status.ERROR;
    }
    res.json(response);
});
exports.default = app;
