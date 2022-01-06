function contar(params) {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let sequencia = document.getElementById('txtsequencia')
    let res = document.querySelector('div#res')
     

        if (inicio.value.length==0|| fim.value.length==0 || sequencia.value.length==0){
            window.alert('[Erro]Coloque a sequência de contagem');

        }else{
            let i = Number(inicio.value);
            let f= Number(fim.value);
            let s=Number(sequencia.value);
            
            
            res.innerHTML = `Contagem: `
            if (i<f) {
            for (let c = i; c <= f; c += s) {
           
                res.innerHTML+= `${c} \u{1F449}`;
            }

            }else{
                 for (let c = i; c >= f; c-=s) {
              
                     res.innerHTML += ` ${c} \u{1F449}`;
                    }
             }
             res.innerHTML +=`\u{1F3C1}`;
        }

}



function tbd() {
    let num = document.getElementById('tabuada');
    let tab = document.getElementById('seltab');

    if (num.value.length==0) {
        window.alert('Digite o número da gerar tabuada');
    }else{
        let b = Number(num.value);
        let v = 1;
        // Essa tab serve para limpar o historico para o procedente
        tab.innerHTML='';
        while (v <= 10) {

            let item = document.createElement('option');
            item.text = `${b} x ${v} = ${b*v}`;

            item.value = `tab${v}`;
            // tab.appenChild serve para gerar um elemeno filho que é item
            tab.appendChild(item);
            v++
        }
    }
    
}