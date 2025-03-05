"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractService = void 0;
const ethers_1 = require("ethers");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ABI = require('./abi.json');
class ContractService {
    constructor() {
        this.provider = new ethers_1.ethers.JsonRpcProvider(process.env.NODE_URL);
        this.wallet = new ethers_1.ethers.Wallet(process.env.PRIVATE_KEY, this.provider);
        this.contract = new ethers_1.ethers.Contract(process.env.CONTRACT_ADDRESS, ABI, this.wallet);
    }
    async mint(value) {
        const _value = value * 10n ** 18n;
        const tx = await this.contract.mint(_value);
        return tx;
    }
    async transferUser(wallet) {
        const tx = await this.contract.transferUser(wallet);
        return tx;
    }
    async getBalance(wallet) {
        const balance = await this.contract.balanceOf(wallet);
        const decimals = 10n ** 18n;
        return balance / decimals;
    }
}
exports.ContractService = ContractService;
