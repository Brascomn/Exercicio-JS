// Objectos são variáves que permitem armazenar pares e chaves
// Estrutura básica de  var objecto = {} 
var objecto = {
    nome :'Braulio',
    idade:26,
    Github:'Brascomn',
    };
    
    // Formas de apresentar
    console.log(objecto);
    console.log(objecto['Github']);
    console.log(objecto.Github);
    console.log(objecto.idade);
    console.log(objecto.nome);
    
    // Adicionar parâmetro ou chaves
    
    objecto.ano = 2022;
    console.log(objecto);
    console.log(objecto.ano);
    // Deletar parâmetro
    
    delete objecto.idade;
    console.log(objecto);
    
    // Botar hobbies em array
    
    objecto.hobbies =['Futebol','Programar','Comer'];
    console.log(objecto);
    console.log(objecto.hobbies);
    console.log(objecto.hobbies.length);
    
    // Novo objectos com array 
    objecto.competencias ={
        linguagem:['JavaScipt','C++','Java'],
        instrumento:['Bateria','Flauta']
    };
    // Variável complexa
    //  console.log(objecto)
    // var objecto = {
    //     nome :'Braulio',
    //     idade:26,
    //     Github:'Brascomn',
    //     competencia :{
    //         linguagem:['JavaScipt','C++','Java'],
    //         instrumento:['Bateria','Flauta']
    //     }
    //     };
        
    // Adicionando função no objecto
    var user = {
    
        // Função Anonima
        // Podemos representar de 2 maneiras,podendo abstrair a palavra reservada function
        // digaoi:function (nome)  || digaoi(nome) forma mais fácil de escrever funcao em um objecto
        digaoi:function (nome) {
            return `Ola ${nome}`
            
        }
    }
    console.log(user)
    console.log(user.digaoi('Bráulio'))
    
    // Adicionando variáveis externa no objecto
    var cor = 'Azul';
    var core = 'Amarelo';
    var user0 ={
        nome:'Valdir',
        cor:cor
        ,
        core
        // cor:cor ou cor
    }
    console.log(user0)
    
    // Juntar varios objectos em um apenas, usando assign
    
    var noc = {
        bi:49667208 ,
        natural:'Luanda'
    };
    
    var con = {
        emitido:1251996 ,
        expira:1252078
    };
    
    var juntar = Object.assign({}, noc,con)
    console.log(juntar)
    // Os 2 objectos serão colocados dentro de {}, mas podemos tirar e colocar en uma outra parte
    // jogando o conteudo de noc em con
    Object.assign(con, noc)
    console.log(con)
    
    // Maneira alternativa de juntar objecto de merge
    // ... espalhar
    var user3 = {
        ...noc,...con
        // para acrescer conteudo, devemos seguir a regra de espalhamento ...
        ,...{
            sexo:'Nem sei',
            profissao:'Programador'
        }, ...user0
    }
    console.log(user3)
    
    
    // Passando o valor de um propriedade para uma variavl
    var nomevariavel ='Estado';
    var Pro = {
        nome:'Sandrenha',
        [nomevariavel]:'Luanda'
    }
    console.log(Pro)
    
    var arrayobject=[
        {nome:'Braulio' , sobrenome:'Chimuanga'},
        {nome:'Solteiro', sobrenome:'Namoro'},
        {nome:'Casado ', sobrenome:'Janeiro'}
    ];
    
    console.log(arrayobject[1].nome);
    
    // navegador de array do usuario
    
            var nave = {
    
                // Propierda auxiliar posicao:0
                posicao:0,
                get atual(){
                    return arrayobject[this.posicao]
                },
                set atual (posicao){
                    this.posicao = posicao;
                },
                proximo(){
                    ++this.posicao;
                },
                anterior(){
                    --this.posicao;
    
                }
            };
                console.log(nave.atual);
                nave.proximo();
    
                console.log(nave.atual);
                // nave.proximo();
    
                nave.proximo();
                console.log(nave.atual);
    /*-------------------------------------------------------------*/ 
                nave.anterior();
                console.log(nave.atual);
    
                nave.atual = 0;
                console.log(nave.atual);
    
                nave.atual = 2;
                console.log(nave.atual);