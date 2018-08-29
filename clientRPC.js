var qrpc = require('qrpc')
var readlineSync = require('readline-sync');

opcoes = ['Soma', 'Subtracao', 'Multiplicacao', 'Divisao'],
index = readlineSync.keyInSelect(opcoes, 'Escolha uma');
console.log('' + opcoes[index]);



if( index+1 == 1 ){
    var numero1 = parseInt(readlineSync.question( 'Primeiro numero:  '));
    var numero2 = parseInt(readlineSync.question('Segundo numero: '));
    var client = qrpc.connect(1337, 'localhost', function() {
        client.call('soma', {a: numero1, b: numero2 }, function(err, ret) {
            console.log("Resultado é :", ret)
        })
     
    })

} else if( index+1 == 2) {
    var numero1 = parseInt(readlineSync.question( 'Primeiro numero:  '));
    var numero2 = parseInt(readlineSync.question('Segundo numero: '));
    var client = qrpc.connect(1337, 'localhost', function() {
        client.call('sub', {a: numero1, b: numero2}, function(err, ret) {
            console.log("Resultado é :", ret)
        })
     
    })

} else if( index+1 == 3 ) {

    var numero1 = parseInt(readlineSync.question( 'Primeiro numero:  '));
    var numero2 = parseInt(readlineSync.question('Segundo numero: '));
    var client = qrpc.connect(1337, 'localhost', function() {
        client.call('mult', { a: numero1, b: numero2}, function(err, ret) {
            console.log("Resultado é :", ret)
        })
     
    })

} else if( index+1 == 4) {
 
    var numero1 = parseInt(readlineSync.question( 'Primeiro numero:  '));
    var numero2 = parseInt(readlineSync.question('Segundo numero: '));
   

    var client = qrpc.connect(1337, 'localhost', function() {
        client.call('div', {a: numero1, b: numero2}, function(err, ret) {
            console.log("Resultado é :", ret)
        })
     
     })

} else {
    console.log("error");
}
