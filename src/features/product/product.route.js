import express from "express";
import ProductController from "./product.controller";


const router = express.Router();
const productController = new ProductController();
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getoneProduct);
router.post("/", productController.addProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct); 
export default router;