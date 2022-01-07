let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#seltab');
let res = document.querySelector('div#res');

// Teremos uma ánalise de dados apartir de um array
let valores = []

  
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100 ) {
        return true;
    }else{
        return false;
    }

}



// n represnta nummero e l represnta lista.
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1 ) {
        return true;
    }else{
        return false;
    }
    
}


function adicionar() {

    // Limpar o espaço
    // Verfirica se é um numero e se adicionar se não esta na lista
    if (isNumero(num.value) && !inLista(num.value,  valores)) {
        // window.alert('Tudo Ok.')
        //  Adicionando ao array 
        valores.push(Number(num.value));
        
        // Visualizar o numero adicionado
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item);
        res.innerHTML='';
       
    }else{
        window.alert('Valor inválido  ou já se encontra na lista.')
    }
    // Limpar o espaço onde foi adicionado
    num.value='';
    // Centar no caixa de texto
    num.focus();



}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    }else{
    let tnt = valores.length;
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for(let pos in valores){

        soma += valores[pos]
        if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos] 
        }
            
            media = soma / tnt
            res.innerHTML = ''; 
            res.innerHTML += `<p> Ao todo , temos ${tnt} números adicionados. </p>`
            res.innerHTML += `<p> O maior valor encontrado foi ${maior} . </p>`
            res.innerHTML += `<p> O menor valor encontrado foi ${menor}. </p>`
            res.innerHTML += `<p> A soma de todos os valores, temos ${soma}. </p>`
    }
    
}