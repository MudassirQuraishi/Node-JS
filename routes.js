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

const body = [];


req.on('data', (chunk) => { console.log(chunk);body.push(chunk);  });  


req.on('end', () => {

    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split('=')[1]; //Debugger attached
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


// module.exports={
//     handler : reqHandler
// }