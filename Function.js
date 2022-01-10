// Function são funções que servem para reaproveitar codigos, podendo ser criado uma vez e sendo chamado em varias partes
function screva(params) {
    console.log('Ola programador')
}

// Passando Parametro em funções, tendo uma fução costumizada
function escreva(mensagem) {
    console.log(mensagem)
}
escreva('Ola Mundo');
escreva('Ola Mundo2');
escreva('Ola Mundo3');
escreva('Ola Mundo4 ');

//  Funções que retornam valores
function soma(a,b) {
    return a + b;
}
console.log(soma(10,5));
// var s recebe a soma dos valore e imprime
var s = soma(5,5); ;
console.log(s);

// Nos Podemos passar qualquer tipo de valor nas function

function somatodos(numeros) {
     var total = 0;
    //  num vai receber o valor da array
     for (var num of numeros) {
        //  somanado total da recpção de  
         
         total = total + num;

        }
        return total;
        //  Retorna Total
}
var arrayn =[3,4,5,67];
// var resultado = somatodos ([3,4,5,67]);
var resultado = somatodos (arrayn);
   console.log('Soma tudo ',resultado);

// Parametro oeste é usado quando não sabes o tamanho de paremetros usaremos
// ...complementos é uma variavel rest que armazenará outros parametros em formatos de array
function Morada(Pais,provincia,cidade, ...complementos) {
    console.log(Pais);
    console.log(provincia);
    console.log(cidade);
    console.log(complementos);
    console.log(complementos[1]);
    console.log(complementos[2]);
}

Morada('Angola',' Brascom', 'Saber Andar',
 'Brauilio Valdir', 'Tenho 25 anos',' Farei 26 no dia 25');

// Funões autoinvocaveis são funções que se autoinvocam.
// Estruturalmente, elas devem possuir a forma de estrutura abaixo
 (function autoexecutaveis(params) {
     console.log('Execute')
 }())

 //Representado com parâmetro 
 
 (function autoexecutavel(nome) {
     console.log('Execute', nome)
 }('Braulio'));


// Normalmente é usado para proteger variáveis,funões ou escopo de funções privadas, Não misturando com outros códigos ou bibliotecas
// Podendo até usar variaveis com o mesmo nome e não são confudidas devido a sua proteção

// Variavel que recebem funções, tornando a variavel em uma função
var subtrai = function subtraido(a,b) {
    return a - b;
};
console.log(subtrai(10,7));

// Funções anonimas são funções sem nome

var apelido = function (a, b ,c) {
    return a - b - c;
}
console.log(apelido(25,2,3));

// CallBack são funções passadas como parâmetro uma outra funcão e executada dentro dela
// fncallback seerá a nossa parametro callback
function SomaCallback (a, b, fncallback) {

    // return a+b;
    return fncallback (a+b);
}
console.log(SomaCallback(10,3, function (total) {
    return total * 5;
}));
console.log(SomaCallback(10,3, function (total) {
    return total / 2;
}));
console.log(SomaCallback(10,3, function (total) {
    return total  + 30;
}));
console.log(SomaCallback(10,3, function (total) {
    return total  - 20;
}));

// ou podemos representar desta forma 
var multiplica = function (total) {
    return total * 5;
}
console.log(SomaCallback(10,3, multiplica));
var divisao = function (total) {
    return total / 5;
}
console.log(SomaCallback(10,3, divisao));


// Calcula a distância entre pontos cartesianos (x1,y1) e (x2,y2).
function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
    }
    console.log(distance(1,2,3,4));

    // Funções com valores padrão

    function nome(nome = 'Coloque Teu Nome', idade='coloque sua idade') {
        console.log(nome)
        console.log(idade)
    }
    nome('Braulio',100);