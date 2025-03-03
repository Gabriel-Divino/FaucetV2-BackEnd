import { ContractService } from "./contractService";

const contract : ContractService = new ContractService();

const mintValue : bigint = 1_000_000_000n;

/*contract.mint(mintValue)
    .then(tx=>{
        console.log(tx);
    })
    .catch((err)=>{
        console.log(err);
    })*/