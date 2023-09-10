const Product= require('../models/Products')

module.exports={
    createProduct:async(req,res)=>{
        const newProduct=new Product(req.body);
        try {
            await newProduct.save()
            res.status(200).json("Product created successfully");
        } catch (error) {
            res.status(500).json("Failed to create the product")
        }
    },
    getAllProducts:async(req,res)=>{
        try {
            const products=await Product.find().sort({
                createdAt:-1
            })
            //send result back to user
            res.status(200).json(products)
        } catch (error) {
            console.log(error + " failed to get the products ata")
        }
    },
    getProduct:async(req,res)=>{
        try {
            const product=await Product.findById(req.params.id);
            res.status(200).json(product);

        } catch (error) {
            res.status(500).json("failed to get product with id : "+req.params.id)
        }
    },
    //Atlas Dashboard -> Search -> Create search index
    //name the database -> Add mY OWn data
    searchProduct:async(req,res)=>{
        try {
            
        } catch (error) {
            
        } 
    }
}