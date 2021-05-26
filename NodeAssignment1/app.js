const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Welcome to Preethis Home!</title></head>');
        res.write('<body><h1>Four of us live here!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>');
        res.write('</body>');
        res.write('</html>');

        res.write('')
        return res.end;
    }

    if(url ==='/Users'){
        res.write('<html>');
        res.write('<head><title>Welcome to Preethis Home!</title></head>');
        res.write('<body><ul><li>Preethi</li><li>Mahendran</li><li>Pappu</li><li>Analika</li></ul></body>');
        res.write('</html>');
        return res.end;
    }

    if(url ==='/create-user' && method == 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        });

       return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody.split('=')[1]);
       });
    }
});

server.listen(3000);

