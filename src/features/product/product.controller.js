import ProductModel from "./product.model.js";
export default class ProductController{
    getAllProducts(req,res){
       const products = ProductModel.GetAllProducts()
       res.status(200).send(products)
    }
    addProduct(req,res){
        
    }
    rateProduct(req,res){
        
    }
    getoneProduct(req,res){
        
    }
    deleteProduct(req,res){
    
    }
    updateProduct(req,res){
        
    }
}