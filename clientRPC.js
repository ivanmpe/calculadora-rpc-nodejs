var qrpc = require('qrpc')
var readlineSync = require('readline-sync');



opcoes = ['Soma', 'Subtracao', 'Multiplicacao', 'Divisao', 'Raiz Quadrada', 'Ponteciacao'],
    index = readlineSync.keyInSelect(opcoes, 'Escolha uma opcao: ');
index = index + 1;



if (index == 1) {
    var numero1 = parseInt(readlineSync.question('Primeiro numero:  '));
    var numero2 = parseInt(readlineSync.question('Segundo numero: '));
    console.log(' Soma ');
    var client = qrpc.connect(5100, 'localhost', function () {
        client.call('soma', { a: numero1, b: numero2 }, function (err, ret) {
            console.log("Resultado é :", ret);
        })
    });

} else if (index == 2) {
    console.log(' Subtracao ');
    var numero1 = parseInt(readlineSync.question('Primeiro numero:  '));
    var numero2 = parseInt(readlineSync.question('Segundo numero: '));
    var client = qrpc.connect(5100, 'localhost', function () {
        client.call('sub', { a: numero1, b: numero2 }, function (err, ret) {
            console.log("Resultado é :", ret)
        })
    })

} else if (index == 3) {

    console.log(' Multiplicacao ');
    var numero1 = parseInt(readlineSync.question('Primeiro numero:  '));
    var numero2 = parseInt(readlineSync.question('Segundo numero: '));

    var client = qrpc.connect(5100, 'localhost', function () {
        client.call('mult', { a: numero1, b: numero2 }, function (err, ret) {
            console.log("Resultado é :", ret)
        })

    });

} else if (index == 4) {


    console.log(' Divisao ');

    var numero1 = parseInt(readlineSync.question('Primeiro numero:  '));
    var numero2 = parseInt(readlineSync.question('Segundo numero: '));
    var client = qrpc.connect(5100, 'localhost', function () {
        client.call('div', { a: numero1, b: numero2 }, function (err, ret) {
            console.log("Resultado é :", ret)
        })

    });

} else if (index == 5) {
    console.log(' Raiz Quadrada ');
    var numero1 = parseInt(readlineSync.question(' Digite o numero:  '));

    var client = qrpc.connect(5100, 'localhost', function () {
        client.call('raiz', { a: numero1 }, function (err, ret) {
            console.log("Resultado é :", ret)
        })


    })

} else if (index == 6) {
    console.log(' Pontenciacao ');
    var numero1 = parseInt(readlineSync.question(' Digite base:  '));
    var numero2 = parseInt(readlineSync.question(' Digite expoente:  '));


    var client = qrpc.connect(5100, 'localhost', function () {
        client.call('pon', { a: numero1, b: numero2 }, function (err, ret) {
            console.log("Resultado é :", ret)
        })


    }) 
}else {
    console.log("Saindo...");
}