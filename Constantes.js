
//Const ou constant, ela não altera o valor, pertecendo ao modo que foi declarado
// Isso pode parecer não ter sentido. Entretanto, declarar uma variável como const não significa necessariamente que seu valor não pode ser mudado. 
// Significa que não podemos sobrescrever o seu identificador. Vamos entender isso melhor

if (true) {
    const autor = 'Valdir'
    console.log(autor);
}
// console.log(autor); 

// Const não permiti redeclarar e nem redefinir no mesmo escopo

// Redeclarar
if (true) {
    const nome = 'Ayrton Valdir'
    console.log(nome);
    
}


// redifnir ou retrinuir, const não permitem ser redifnida ou retrinuida

// const nome = 'BVSC';
//  nome = 'CSVB';

//  As alterações poder ter uma alteração em array e objecto

const competencia =['js','C++','Java']
console.log(competencia);

competencia[1]='Sass'
console.log(competencia);

