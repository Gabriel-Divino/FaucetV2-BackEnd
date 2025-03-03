import {ethers} from "ethers";
import doenv from "dotenv";
doenv.config();

const ABI = require('./abi.json')

export class ContractService{
    
    private provider: any;
    private wallet : any;
    private contract : any;



    constructor(){

        this.provider = new ethers.JsonRpcProvider(process.env.NODE_URL);
        this.wallet  = new ethers.Wallet(process.env.PRIVATE_KEY!,this.provider);
        this.contract = new ethers.Contract(process.env.CONTRACT_ADDRESS!,ABI,this.wallet);
        

    }

    async mint(value : bigint) : Promise<any>{
        const _value = value * 10n **18n;
        const tx = await this.contract.mint(_value);
        return tx;
    }

    async transferUser(wallet : string): Promise<any>  {

        const tx  = await this.contract.transferUser(wallet);
        return tx;

    }

    async getBalance(wallet : string) : Promise<bigint>{
        const balance : bigint = await this.contract.balanceOf(wallet);
        const decimals : bigint = 10n ** 18n;
        return balance / decimals;
    }

}