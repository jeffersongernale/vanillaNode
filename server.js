const http = require('http')
const dotenv = require('dotenv');
dotenv.config();

const { getProducts, getProduct, createProduct } = require('./controllers/productController')
const server = http.createServer((request, response)=>{
    if(request.url === '/api/products' && request.method === 'GET')
    {
        getProducts(request, response)
    }
    else if(request.url.match(/\/api\/products\/([0-9]+)/) && request.method === 'GET'){
        const id = request.url.split('/')[3]
        getProduct(request, response, id)
    } 
    else if(request.url === '/api/products' && request.method === 'POST')
    {
        createProduct(request, response)
    }
    else
    {
        response.writeHead(404,{'Content-type': 'application/json'})
        response.end(JSON.stringify({message: 'Route Not Found'}))
    }
    
})

const PORT = process.env.PORT || 5000

server.listen(PORT, ()=>{
    console.log(`Server running on port : ${PORT}`)
})