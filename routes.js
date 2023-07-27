const fs = require('fs')

const reqHandler =(req,res)=> {
    const url= req.url;
    const method = req.method;

    if (url === '/'){
    fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=> {
        if ( err) {
            console.log(err)
        }

    res.write('<html>')
    res.write('<head><title>Enter the Message </title></head>');
    res.write(`<body>${data}</body>`)
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');

    res.write('</html>')

    return res.end();
});
} else if (url === '/message' && method === 'POST'){

// chunks can be said as pieces of body that are being sent through stream
// inorder to store them we will be using an array
const body = [];

// on is a event listener, and it listens for data
// and the chunks recieved will be pushed into the array
req.on('data', (chunk) => { console.log(chunk);body.push(chunk);  });  


req.on('end', () => {
    // now we are parsing the chunks into a single element
    // here we use bufferred data and concat it to body and conver it into  string
    //and buffer also holds some chunks so we add it to the body[]
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split('=')[1];
    fs.writeFile('message.txt',message, (err)=>{
        if (err){
            console.log(err);
        }
        res.statusCode= 302;
        res.setHeader ("Location", "/");
        return res.end();
    });
});



}};




module.exports = reqHandler;


// exports.handlerofRoutes = reqHandler;


// module.exports={
//     handler : reqHandler
// }