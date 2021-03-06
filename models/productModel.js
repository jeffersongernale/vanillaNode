
const products = require('../data/products')

function findAll(){
    return new Promise((resolve, reject)=>{
        resolve(products)
    })
}

function findById(id){
    return new Promise((resolve, reject)=>{
        
        const product = products.find((pid)=> pid.id === id)
        resolve(product)

    })
}

module.exports = {
    findAll,
    findById
}