
const express = require('express');
const bodyParser = require('body-parser');


const addProduct =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/products" method="post">
        <input type="text" name="product" placeholder="Enter Product Name">
        <input type="number" name="size" placeholder="Enter size of the product">
        <button type="submit">Add Product</button>
    </form>
</body>
</html>`



const app = express();
app.use((bodyParser.urlencoded({ extended: true })));

app.use('/add-product',(req, res, next) =>{
    res.send(addProduct)
});

app.post('/products',(req,res,next)=>{//this middlware is now restricted to only POST requests
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req, res, next) =>{
    res.send('<h1>Welcome to the landing page.</h1>');
});


const port =1000;
console.log(`Server starting at ${port}`);
app.listen(port);


