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
    
        // Armazenar valores de chave em uma variavel
            var armazenar ={
                nome : 'Brascomn',
                idade : 25 ,
                pais:'Angola'
            };
    
            // Forma tradicional
    
            var nomes = armazenar.nome;
            var idades = armazenar.idade;
            console.log(nomes)
            console.log(idades)
            
            // Nova Forma 
            var {idade} = armazenar;
            console.log(idade);
            var {idade, pais, nome} = armazenar;
            console.log(nome ,idade, pais);
            // A conteudo da chave nome será armazenada na variável primeiroNome
            var {nome:primeiroNome} = armazenar;
            console.log(primeiroNome);
            
            // Obejctos dentro de objectos
            var novoarmaz = {
                Apelido: {
                    firstname:'Valdir',
                    lastname:'Chimuanga'
                }
            };
    
            // Forma Tradicional
            var first = novoarmaz.Apelido.firstname;
            console.log(first);
            
            //Nova Forma
            var { Apelido: { firstname }} = novoarmaz;
            // ela não consegue pela apartir de apelido, apenas com firstname
            // console.log(Apelido); 
            console.log(firstname); 
            
            // Passando para variável nm
            var { Apelido: { firstname:nm }} = novoarmaz;
            console.log(nm); 
    
    
            // Funcão recebendo objecto
            
            function imprimirUsuario(usuario) {
                console.log(usuario.nome);
                console.log(usuario.idade);
                console.log(usuario.sexo);
            };
    
            var usuarioFunction = {
                nome:'Bráulio Valdir',
                idade:27,
                sexo:'M'
            }
            imprimirUsuario(usuarioFunction);
    
            // Extraindo de maneira especifica {nome, idade, sexo}
    
            function imprimirUsuario2({nome, idade, sexo, pais='Angola'}) {
                // O valor de angola é padrão pos não foi passado como permanente,
                //  sendo que para isso teriamos que passar no objecto
                console.log(nome);
                console.log(idade);
                console.log(sexo);
                console.log(pais);
                
            };
            imprimirUsuario2(usuarioFunction);
    
            // Object.keys mostras as chaves do object
            console.log(Object.keys(usuarioFunction));
            // Obejct.values mostra os valores do obejct
            console.log(Object.values(usuarioFunction));
    
            var props = Object.keys(usuarioFunction);
            for (let i = 0; i < props.length; i++) {
                console.log( props[i]);
    
                // pegando a propriedade de objecto
                // Forma estatica
                console.log(usuarioFunction.nome);
                console.log(usuarioFunction.idade);
                console.log(usuarioFunction.sexo);
                
                // Forma Dinamica
                console.log(usuarioFunction[props[i]]);
            };
    
            // Modo de intereção mais simples
            for (var prop of props) {
                // passagem de parametro direito
                console.log(usuarioFunction[prop])
            }
    
            // for in em vez de usar um array, usamoos um objecto
            for (var prop2 in usuarioFunction) {
                // Ele retorna a propriedade ou chave
                console.log(prop2);
                //Pegando o valor
                console.log(usuarioFunction[prop2]);
                // Retornando os 2
                console.log(prop2, usuarioFunction[prop2]);
            }
            // Prevenção para que não pega valores que nao colocas,
            // mas que foram herdados de bibliotecas entre outros ou algum lugar
    
            for (var prop2 in usuarioFunction) {
               if (usuarioFunction.hasOwnProperty(prop2)) {
                   console.log(prop2, usuarioFunction[prop2]);
               }
            }