
// node imports
// const http = require('http');


//third party imports
const express = require('express');

//user imports


//code

const app = express();

//creatig middleware
app.use((req, res, next) =>{
    console.log('In the middleware');
    next();//Allows the request to continue to the next middleware in line.
})

app.use((req, res, next) =>{
    console.log('In another middleware');
    res.send('<h1>Hello')
});



// const server = http.createServer(app);
// console.log('server started');
// server.listen(1000);
// this code can be omitted as express helps us in writing a cleaner code which does the same functinality as the above lines
console.log('server listening on port 3000');
app.listen(3000);


