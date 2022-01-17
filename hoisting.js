
// Hoisting - Como é aplicado no var e let
// Uma outra diferença entre var e let é o processo de Hoisting. Esse processo ocorre em todas as variáveis no JavaScript.
// Essa expressão significa “Içar” ou “Elevar”. Assim, todas as variáveis declaradas no JavaScript são elevadas para o início de nosso código quando ele é executado.
number = 2;

var number;

console.log('O número é ' + number);

//

number = 3;

let number;

console.log(number);
// Nosso código não funcionou. A variável number sofreu o hoisting da mesma forma.
// Entretanto, como ela foi declarada com o let, não foi inicializada,


// A peculiaridade em hositing é a elevação de código

console.log(soma(10,2))
let soma = function(a, b){
    return a + b;
}

console.log(soma(10,2))
function soma (a, b){  //function ela sofre uma elevação de codigo e é executado antes do console
    return a + b;
}

function testandoHoisting() {
   
    console.log('Testando Hosting', aaa);
    var aaa = 123;
    console.log('Testando Hosting', aaa);
}
testandoHoisting();