const Product = require('../models/productModel')


async function getProducts(request, response){
    try{

        const products = await Product.findAll()
        response.writeHead(200,{'Content-type': 'application/json'})
        response.end(JSON.stringify(products))  
    }
    catch(error)
    {   
        console.log(error)
    }
}

async function getProduct(request, response, id)
{
    try{
        const product = await Product.findById(id)

        if(!product){
            response.writeHead(404,{'Content-type': 'application/json'})
            response.end(JSON.stringify({message: "Product Not Found"})) 
        }
        else
        {
            response.writeHead(200,{'Content-type': 'application/json'})
            response.end(JSON.stringify(product))  
        }
    }
    catch(error)
    {
        console.log(error)
    }
}
async function createProduct(request, response){
    try{
        
    }
    catch(error)
    {   
        console.log(error)
    }
}


module.exports = {
    getProducts,
    getProduct,
    createProduct
}