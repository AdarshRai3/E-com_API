import express from "express"
import mongoose from "mongoose"
import productRouter from "./src/features/product/product.route.js";

const server = express();

server.use('/api/products', productRouter);
server.get('/', (req, res) => {
    res.send("Welocme to e-com api");
    
})

server.listen(3000, () => {
    console.log("server is running on port 3000");
})