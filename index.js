import express from "express"
import mongoose from "mongoose"

const server = express();

server.get('/', (req, res) => {
    res.send("Welocme to e-com api");
    
})

server.listen(3000, () => {
    console.log("server is running on port 3000");
})