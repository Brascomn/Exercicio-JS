
    //ESCOPO é a visiblidade das variáveis e funções, dependendo onde édeclarado as
    // variaveis, elas podem estar ou não visivel em outros lugar

    // Varaiáveis Global / Escopo Global todo mundo tem acesso

    var nome ='Braulio';
    console.log(nome);

    function imprimirNome() {
        console.log(nome);
    }
    imprimirNome();
    // Variável Local / Espoco Local determinada em uma area

    function imprimmirIdade(params) {
        var idade = 01;
        console.log(idade)
    }
    imprimmirIdade();
    // variavel vai dar indefinida
   
    console.log(idade);

    // o var tem que ter uma atenção especial, sendo que mesmo estando dentro de um escopo local e não 
    // for declara usado var (var a) e apenas (a), ela vai ser enchergada como global
    function imprimmirnmbi(params) {
        nmbi = 14332224441;
        console.log(nmbi)
    }
    imprimmirnmbi();

    console.log(nmbi);
    console.log(window.nmbi); 
    console.log(this.nmbi);

    // ESCOPO DINAMICO só se sabe o valor da variável até ser executado

    // O valor de de this só é mostrado quando e=é executado
    function imprimirthis(params) {
        console.log('Imprimir', this)
    }
    function imprimirMensagem(params) {
        imprimirthis.call({msg: 'Sou um objecto'})
        
    }
    function imprimirMensagem2(params) {
        imprimirthis.call(['Sou um Array'])
        
    }
    imprimirMensagem();
    imprimirMensagem2();
    // imprimirthis();

    //ESCOPO LEXICO já se sabe o seu valor antes de ser executado

     function imprimmirIdade() {
        var nome = 'Braulio';
        // console.log(nome);

        // Retornando uma funtcion
        return function (params) {
            var sobrenome = 'Sandrenho'
            console.log(nome, sobrenome)
        }
    }
    var user = imprimmirIdade()
    user();


    // ESCOPO DE BLOCO usado em loop, mas se usarmos algo var, ela vai ser global
    // Espoco de bloco usa let
    if (true) {
        var youtube = '@ProgrmadorAbordo'
        let educado = '@Sandrenha Chimuanga'
        console.log(youtube);
        console.log(educado);

    }
    console.log(youtube);
    // console.log(educado);

    // Não é possivel redeclarar uma variavel com let, apenas é possivel com var
    // Só podendo dar em um novo bloco
    let sobrenome = 'LET'
    console.log(sobrenome);
    
    // let sobrenome = 'Mudando'
    // console.log(sobrenome);
    {
        
        let sobrenome = 'Mudando'
        console.log(sobrenome);
    }
