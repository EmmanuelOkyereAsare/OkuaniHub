let http = require('http'); //gives http
let fs  = require('fs'); //gives fs
let path = require('path'); // gives "string".pathext()
let API = require('./api.js')


const ip = '127.0.0.1'; //or domain ip
const port = 3001;      // or 80

http.createServer(function(request, response){
    console.log('request ', request.url);

    let file = '.' + request.url;
    if (file == './') file = './index.html';

    //Extract requested file's extension
    let extension = String(path.extname(file)).toLocaleLowerCase();

    //Define acceptable file extensions
    let mime = {'.html': 'text/html',
                  'js' : 'text/javascript',
                '.css' : 'text/css',
                '.json' : 'application/json',
                '.png' : 'image/png',
                '.jpg' : 'image/jpg',
                '.gif' : 'image/gif'};
    //if requested file type is not mime, default
    //to octet-stream which means "arbitrary binary data."
    let type = mime[extension] || 'application/octet-stream';


    //Read file from hard drive
    fs.readFile(file, function(error, content){
        if(error){
            if(error.code == 'ENOENT'){
                //Is this an API call, or should we serve a file?
                if (API.catchAPIrequest(request.url))
                  response.end(API.exec(request.url), 'utf-8');

                else
                //Not an API call - file just doesn't exist
                fs.readFile('./404.html', function(error, content){
                    response.writeHead(200, {'Content-Type': type});
                    response.end(content, 'utf-8');
                });
            }else{
                response.writeHead(500);
                response.end('Error: ' + error.code + '\n');
                response.end();
            }
        }else{
            response.writeHead(200,{'Content-Type': type});
            response.end(content, 'utf-8');
        }
    })
}). listen(port, ip);

console.log('Running at http://' + ip + ':' + port + '/');