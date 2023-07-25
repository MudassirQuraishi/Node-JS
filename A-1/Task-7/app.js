const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title> Landing Page </title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to the Landing page</h1>')
        res.write('<form action="/home" method="POST"> <a href="/about">Home</a></form>');
        res.write('<form action="/about" method="POST"> <a href="/home">About</a></form>');
        res.write('<form action="/node" method="POST"> <a href="/node">Node</a></form>');
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }
    if(url ==='/home'){
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to home page</h1>');
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }
    if(url==='/about'){
        res.write('<html>');
        res.write('<head><title>About Page</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to About us page</h1>');
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }
    if(url==='/node'){
        res.write('<html>');
        res.write('<head><title>Node Page</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to my Node JS Project</h1>');
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>No Page Found</title></head>');
    res.write('<body>');
    res.write('<h1>Landing Page</h1>');
    res.write('</body>')
    res.write('</html>');
    res.end();
})

server.listen(4000);