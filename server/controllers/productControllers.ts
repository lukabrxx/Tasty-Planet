import{Request, Response, RequestHandler} from 'express'
import productsPerPage from '../config/pagination.js'
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

    //* pagination
    const pageNum = Number(req.query.pageNum) || 1 
    const totalProducts = await Product.countDocuments({})

    //* sort by name, price etc
    let sort = {}
    const sortOption  = req.query.sort as string || ''
    if(sortOption) {
        let sortOpt = sortOption.split('_')
        //sortOpt[0] is not array, this how we make dinamic key  name_1 / name_-1 or price price_-1
        sort = { [sortOpt[0]] : Number(sortOpt[1])}
    }

    const products = await Product.find({}).sort(sort).limit(productsPerPage).skip(productsPerPage * (pageNum - 1))
   
    res.json({products, pageNum, totalProducts, sitesPerPagination: Math.ceil(totalProducts / productsPerPage)})
})


export {
    createProduct,
    getProducts,
    getProduct
}

//? req.body 
//Generally used in POST/PUT requests.
//Use it when you want to send sensitive data(eg. form data) or super long JSON data to the server.

//? req.params
//These are properties attached to the url i.e named route parameters. You prefix the parameter name with a colon(:) when writing your routes.   app.get('/giraffe/:number',

//? req.query 
//req.query is mostly used for searching,sorting, filtering, pagination, e.t.c
// Say for instance you want to query an API but only want to get data from page 10, this is what you'd generally use.
//  GET  http://localhost:3000/animals?page=10


