import express from "express";
import cors from "cors";
import doenv from "dotenv";
import { ApiResponse , Status} from "./interface";
import { ContractService } from "./contractService";
doenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT

/*app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})*/


const contract : ContractService = new ContractService();

app.get('/',(req,res)=>{
    res.json({
        name : "Teste"
    })
})

app.get('/balance/:wallet',async (req,res)=>{

    const response : ApiResponse = {
        status:Status.OK,
        data : {}
    };

    try{

        const wallet : string = req.params.wallet;
        console.log(wallet);
        const balance : bigint = await contract.getBalance(wallet);

        response.data = String(balance);

    }catch(err : any){
        console.log(err);
        response.status = Status.ERROR;
        response.error = err.message;
    }

    res.json(response);
})

app.get('/transfer/:wallet',async (req,res)=>{

    const response : ApiResponse = {
        status : Status.OK,
        data :{}
    };

    try{

        const wallet : string = req.params.wallet;
        const tx : any  = await contract.transferUser(wallet);
        response.data = tx;

    }catch(err : any){
        response.error = err.message;
        response.status = Status.ERROR;

    }

    res.json(response);

})

export default app;

