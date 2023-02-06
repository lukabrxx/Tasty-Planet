import{Request, Response} from 'express'
import Product from '../models/Product.js'
const asyncHandler= require('express-async-handler') 

//create product
const createProduct = asyncHandler(async(req:Request,res:Response) =>{
const {name,category, desc, isVegan, price, stock, image } = req.body 

const newProduct = await Product.create({
    name,
    category,
    image,
    desc,
    price,
    stock,
    isVegan
})

await newProduct.save()


if(newProduct) {
    res.json(newProduct)
} else {
    res.status(404)
    throw new Error("Product could not be upload.")
}
})

// get product
const getProduct =  asyncHandler(async(req:Request,res:Response) => {
    const product = await Product.findById(req.params.id)
    if(product) {
        res.json(product)
    } else {
        throw new Error('product not found')
    }
})

//get products
const getProducts = asyncHandler(async(req:Request,res:Response) => {

    const product = await Product.find()

    res.json(product)
})


export {
    createProduct,
    getProducts,
    getProduct
}