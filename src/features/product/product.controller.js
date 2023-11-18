import ProductModel from "./product.model.js";

export default class ProductController{

    getAllProducts(req,res){
        const products = ProductModel.getAll();
        res.status(200).send(products);
    }

    addProduct(req, res){
        const {name, prices , sizes} = req.body;
        const newProduct = {
            name,
            prices:parseFloat(prices),
            sizes:sizes.split(','),
            imageUrl:req.file.path,

        };
        const createdRecord = ProductModel.add(newProduct);
        res.status(201).send(createdRecord);
    }

    rateProduct(req,res){}

    getOneProduct(req,res){
        const id = req.params.id;
        const product = ProductModel.get(id);
        if(!product){
            res.status(404).send('Product not found');
        } else{
            return res.status(200).send(product);
        }
    }

    filterProducts(req, res) {
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const category = req.query.category;
        const result = ProductModel.filter(
            minPrice,
            maxPrice,
            category
        );
        res.status(200).send(result);
    }

    updateProduct(req, res){
        const updatedProduct = ProductModel.update(
            req.params.id,
            req.body
        )  
        if(!updatedProduct){
            res.status(404).send('Product not found');
        }
          
        return res.status(200).send(updatedProduct);
    }

    deleteProduct(req, res){
         
        ProductModel.delete(req.params.id);
        res.status(204).send();
    }

}