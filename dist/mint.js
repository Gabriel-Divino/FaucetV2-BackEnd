"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contractService_1 = require("./contractService");
const contract = new contractService_1.ContractService();
const mintValue = 1000000000n;
/*contract.mint(mintValue)
    .then(tx=>{
        console.log(tx);
    })
    .catch((err)=>{
        console.log(err);
    })*/ 
