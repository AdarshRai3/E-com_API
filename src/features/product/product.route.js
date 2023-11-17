import express from "express";
import ProductController from "./product.controller.js";


const productRouter = express.Router();
const productController = new ProductController();

productRouter.get(
    "/", 
    productController.getAllProducts
);

productRouter.get(
    "/:id", 
    productController.getoneProduct
);

productRouter.post(
    "/", 
    productController.addProduct
);

productRouter.put(
    "/:id", 
    productController.updateProduct
);

productRouter.delete(
    "/:id", 
    productController.deleteProduct
); 

export default productRouter;