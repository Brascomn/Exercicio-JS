
//  Closues = (Escopo Léxico + Memorização do escopo)
//  ESCOPO LÉXICO já se sabe o seu valor antes de ser executado
//  Memorização do escopo em que ela foi criada

function imprimirNome() {
    let nome = 'Ayrton';//Escopo externo inicio
    return function () {
        return nome;//Escopo interno 
    }//Escopo externo fim
}
imprimirNome();//Aqui apenas estamos a invocar o primeira funtcion

// A ivocação do segunda function, é que nos retorna valor 'Ayrton'
var fun = imprimirNome();
console.log(fun()); // (fun()) é usado quando retornamos uma função e objectos


// Caracteristica de CLOSURES
// Permite criar funtcion e variáveis privadas sem utilizar class

function minhaBiblioteca() {
    
    return { //retorna obejcto
        add5(){
            return 10 + 5;
        },
        add7(){
            
            return 10 + 7;
        }
    }
}

var b = minhaBiblioteca();
console.log(b.add5());
console.log(b.add7());

function minhaBiblioteca2() {
    
function auxiliar(valor) { //funtcion auxiliar
    return 20 + valor;
}

    return { //retorna obejcto
        add5(){
            return auxiliar(5);
        },
        add7(){
            
            return auxiliar(7);
        }
    }
}

var c = minhaBiblioteca2();
console.log(b.add5());
console.log(b.add7());



// 
function inicializar(params) {
    let nome = 'Braulio';
    console.log(nome);
    
    //Permite a execução de uma function depois de um tempo determinado
    setTimeout( function() { //funtcion anonima
        console.log(nome);
    }, 2000) //sera executada depois de 1s 
}

inicializar();

//Memorização de escopo
function imprimir(nome) {
    return function () {
        console.log(nome, 'Valdir');
        
    }  
}

function inicializar() {
    let nome = 'Braulio';
    console.log('First');
    //Permite a execução de uma function depois de um tempo determinado
    setTimeout( imprimir(nome), 2000) //sera executada depois de 2 s 
}

inicializar();