import express from "express";
import cors from "cors";
import doenv from "dotenv";
doenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})


app.get('/',(req,res)=>{
    res.json({
        name : "Teste"
    })
})