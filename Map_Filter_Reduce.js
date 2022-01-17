// O MAP, FILTER E REDUCE TRABALHAM COM ARRAY
// O MAP, FILTER E RETORNAM ARRAY , AO CONTRARIO DE REDUCE RETORNA OUTROS VALORES


//MAP MAP MAP MAP MAP
 // Use map() quando: é preciso traduzir /mapear todos os elementos em um array para outro conjunto de valores.

 // Manipulação de array sem map
 const numeros = [2, 3, 4, 5, ]
 let novoArrayNumeros = []
 
 for (let i = 0; i < numeros.length; i++) {

     console.log(numeros[i] * 2 );
     // conlocando no outro array
     novoArrayNumeros.push(numeros[i] * 2 );
 }

 console.log( numeros);
 console.log(novoArrayNumeros);


 // Manipulando com Array
 // O método Array.map() permite a você iterar sobre o array e modificar seus elementos usando uma função de callback. 
 // A função de callback será executada em cada um dos elementos do array.


 const ArrayMap = numeros.map( function (numero) { //cada interação será o numero do array
     // O map executa 1 por 1
     // console.log(numero);

     return numero * 2;
 })

 console.log('Novo Array', ArrayMap);

 // Deixando o MAP mais curto com ajuda da ArrowFuntcion

 const ArrayArrow = numeros.map(numero => numero * 2)

 // 1-numero é o paramtro e o segundo é o return
 console.log('ArrayArrow', ArrayArrow)
 console.log('ArrayArrow',  numeros.map(numero => numero * 5)) //mais mais curto


 const nomes = ['Braulio','Valdir','Sandrenha','Chimuanga'];
 const nomesMaiusculos  = nomes.map(function (nome) {
 return nome.toUpperCase();        
 })
 console.log(nomesMaiusculos);

 // USANDO ARROW FUNTCION
 const nomesMinusculo  = nomes.map(nome => nome.toLowerCase())
 console.log(nomesMinusculo);
 
 // Use map() quando: é preciso traduzir /mapear todos os elementos em um array para outro conjunto de valores.

 // Exemplo Final: converter temperatura de Fahrenheit para Celsius.

 var fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];

 var celcius = fahrenheit.map( function( elem ) {
     return Math.round( ( elem - 32 ) * 5 / 9 );
 } ); 

 console.log(celcius);//  [ -18, 0, 7, 10, 24, 27, 37, 49 ]

 // 

 const NovoFahrenheit = celcius.map( function( elem ) {
     return Math.round( ( elem * 9 ) /5 + 32 );
 } ); 

 console.log(NovoFahrenheit);



 // FILTER FILTER FILTER FILTER FILTER
 //  A diferença do filter é que ele precisa regressar um valorr booleano true /false
 // Possui o mesmo paramétro que MAP

 //Use filter() quando: é preciso remover elementos indesejados com base em alguma(s) condição(ões).

 // Não usando FIlter
 let multiplo2= [];
 for (let i = 0; i < numeros.length; i++) {

     // Verificação 
     if (numeros[i] % 2 === 0) {

        multiplo2.push(numeros[i]);   
     }
 }
 console.log(multiplo2);



 // USANDO FILTER 
 // 
 const numeFiltrados = numeros.filter(function(numero_f){
    
     if (numero_f % 2 === 0){
         return true;
     }else {
         return false;
     }
     // neste caso podemos usar simplesmente 
     // return numero % 2 === 0;
 })
 console.log('Novo Filtrado', numeFiltrados);

 // ENCURTANDO ARROW FUNTCION

 const numeFiltrados2 = numeros.filter(numero_ff => numero_ff % 2 === 0);
 console.log('Novo Filtrado', numeFiltrados2);


 // COMBINAÇÃO DE FILTER E MAP

const ArrayFilterMAp = numeros
.filter(numero => numero % 2 === 0)
.map(numero => numero * 2);

console.log(ArrayFilterMAp);

//Use filter() quando: é preciso remover elementos indesejados com base em alguma(s) condição(ões).


//    REDUCE REDUCE REDUCE REDUCE REDUCE REDUCE
//    Use reduce() quando: é preciso encontrar um valor cumulativo ou concatenado com base em elementos de todo o array.

// SEM REDUCE
 let soma = 0;
 for (let i = 0; i < numeros.length; i++) {
     soma = soma + numeros[i];
     
 }
 console.log('For Norma', soma);


 // COM REDUCE 
 // 1 paramêtro é a function de callback e segundo é o valor inicial do que queremos retorna
const reduceSoma = numeros.reduce(function(valorAcomulador,valorArray ) {

 // valorAcomulador é o valor inicial que é como (int i =0) que vai acomulados os valores
 // valorArray valor que ficara sendo interando do array
 return valorAcomulador + valorArray;

}, 0)

console.log(reduceSoma);

const reduceSomas2 = numeros.reduce((valorAcomulador,valorArray ) => valorAcomulador + valorArray, 0)
 
 console.log('COM ARROW FUNTCION', reduceSomas2);


 // Array de Objectos
 // Exemplo: soma de lançamentos de foguetes orbitais no período de 1 ano.
 
 var rockets = [
     { country:'Russia', launches:32 },
     { country:'US', launches:23 },
     { country:'China', launches:16 },
     { country:'Europe(ESA)', launches:7 },
     { country:'India', launches:4 },
     { country:'Japan', launches:3 }
 ];
 
 var sum = rockets.reduce( function( prevVal, elem ) {
     return prevVal + elem.launches;
 }, 0 );
 
 // Usando Arrow Function
 // rockets.reduce( ( prevVal, elem ) => prevVal + elem.launches, 0 ); 
 
 sum // 85 
 console.log(sum)

 // COomparando com idades

 
 const pessoas  = [
     { Nome:'Braulio', idade:32 },
     { Nome:'Valdir', idade:23 },
     { Nome:'Sandrenha', idade:16 },
     { Nome:'Chimuanga', idade:7 },
     { Nome:'Brascomn', idade:17 },
     { Nome:'Cabobo', idade:27 },
     { Nome:'Val', idade:4 },
     { Nome:'B', idade:3 }
 ];

 // Vamos retorna um Objecto de array com os maiors e menores

 const pessoasAgrupadas = pessoas.reduce(function(valorAcomulador, valorArray) {
     
     //vaificar idade, Usaremos operação ternaria 
     const MaiorouMenor = valorArray.idade >= 18 ? 'maiores' : 'menores';

     valorAcomulador[MaiorouMenor].push(valorArray);
 // valorAcomulador vai acomulando os valores
 // valorArray valor que ficará sendo interando do array - Pessoas
 
     return valorAcomulador;
 }, {maiores: [], menores: []})

 console.log('Pessoas Agrupadas', pessoasAgrupadas);