const mongoose=require('mongoose')

const productSchema= new mongoose.Schema({
    title:{
        type:String,required: true
    },
    supplier:{
        type:String,required: true
    },
    image:{
        type:String,required: true
    },
    description:{
        type:String,required: true
    },
    product_location:{
        type:String,required: true
    },
},
    {timestamp:true}
)
//exporting our schema as a module name Product.
//we will import that same model in our productControloler.js
module.export=module.model("Product",productSchema)