const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    fs.readFile('message.txt',(err, fileContent) => {
      res.write('<html>');
      res.write('<head><title>Enter Message</title><head>');
      res.write('<body>');
      res.write('<div class="messages">');

      if (!err && fileContent) {
        res.write('<p>Messages:</p>');
        res.write(`<p>${fileContent}</p>`);
      }
      else if(!fileContent){
        res.write('<p>No messages</p>');
      }

      res.write('</div>');
      res.write('<form action="/message" method="POST">');
      res.write('<input type="text" name="message" placeholder="Enter a message">');
      res.write('<button type="submit">Send</button></form>');
      res.write('</body>');
      res.write('</html>');
      res.end();
    });
  } else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
  }
});

server.listen(1000);