// Importar a biblioteca que use o protocolo http
const http = require('http');
const url = require('url');
const fs = require('fs');
// 

function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data);
    });
}

var callback = function (request, response){
    //response.writeHead(200, {"Content-type": "text/plain"});
    //response.end("Olá Mundo Node!\n");
    var parts = url.parse(request.url);
    var path = parts.path;

    if(parts.path == "/"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "siteteste.html");
    }else if(parts.path == "/rota1"){
        response.writeHead(200, {"Content-type": "application/pdf"});
        readFile(response, "arquivo1.pdf");
    }else if(parts.path == "/rota2"){
        response.writeHead(200, {"Content-type": "application/json"});
        readFile(response, "arquivo2.json");
    }else if(parts.path == "/rota3"){
        response.writeHead(200, {"Content-type": "image/png"});
        readFile(response, "arquivo3.png");
    }else if(parts.path == "/rota4"){
        response.writeHead(200, {"Content-type": "application/zip"});
        readFile(response, "arquivo4.zip");
    }else if(parts.path == "/rota5"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "geradores.html");
    }else if(parts.path == "/rota6"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "Area do Aluno.html");
    }else{
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "site404.html");
    }
};


// Servidor HTTP
var server = http.createServer(callback);

//Porta que o servidor vai escutar
server.listen(3000);

//Mensagem ao iniciar o servidor
console.log("[STATUS - OK] ... Servidor montado em http://localhost:3000");