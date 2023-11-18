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

}