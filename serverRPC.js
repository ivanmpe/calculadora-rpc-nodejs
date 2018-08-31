var qrpc = require('qrpc')
var server = qrpc.createServer()
const PORT = 5100;

server.addHandler('soma', function(req, res) {
    console.log("Operacao soma, ID da Chamada " + req.id );
    soma = req.m.a + req.m.b;
    res.write(soma);     
})

server.addHandler('sub', function(req, res) {
    console.log("Operacao subtracao, ID da Chamada " + req.id );
    sub = req.m.a - req.m.b;
;    res.write(sub);     

})
server.addHandler('mult', function(req, res) {
    console.log("Operacao multiplicacao, ID da Chamada " + req.id );
	var mult = req.m.a * req.m.b;
    res.write(mult);      
})

server.addHandler('div', function(req, res) {
    console.log("Operacao divisao, ID da Chamada " + req.id );
	var div = req.m.a/req.m.b;
    res.write(div);     
})

server.addHandler('raiz', function(req, res) {
    console.log("Operacao Raiz Quadrada, ID da Chamada :" + req.id );
    res.write(Math.sqrt(req.m.a));     
})

server.addHandler('pon', function(req, res) {
    console.log("Operacao Potenciacao, ID da Chamada " + req.id );
    
    res.write(Math.pow(req.m.a, req.m.b));      
})


server.listen(PORT, function() {
    console.log("qrpc escutando na porta: " + PORT);
})
