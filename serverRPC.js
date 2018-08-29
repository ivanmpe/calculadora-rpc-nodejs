var qrpc = require('qrpc')
var server = qrpc.createServer()

server.addHandler('soma', function(req, res, next) {
    console.log("soma");
    soma = req.m.a + req.m.b
    res.write(soma);     
})
server.addHandler('sub', function(req, res, next) {
    sub = req.m.a - req.m.b;
    console.log("subtracao");
    res.write(sub);      // first response
})
server.addHandler('mult', function(req, res, next) {
    console.log("multiplicacao");
	var mult = req.m.a * req.m.b;
    res.write(mult);      // first response
})
server.addHandler('div', function(req, res, next) {
    console.log("divisao");
	var div = req.m.a/req.m.b;
    res.write(div);      // first response
})

server.listen(1337, function() {
    console.log("qrpc listening on port 1337")
})
