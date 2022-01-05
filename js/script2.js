function verificar(params) {
    var data = new Date();
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length==0 || Number( fano.value)>ano) {
        window.alert('[Erro],Verifique os dados e ente novamente.')   
    }else{
        var fsex= document.getElementsByName('radsex')
        //getElementByNameé usado para marcacao d uma opcao ou multipla
     //radsex é o name dos 2 radios button ,onde temos radsex0 e radsex 1
 
        var idade = ano - Number(fano.value)
        //var idade faz o calculo da idade
        var genero = ''
        //genero comeca com string vazia
        var img = document.createElement('img')
        img.setAttribute('id','foto')
 
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                img.setAttribute('src','img/P.png')
                //Criança
             }else if (idade <21) {
                 img.setAttribute('src','img/Africa.png')
                 //Jovem
             }else if (idade <50 ){
                 //Adulto
                 img.setAttribute('src','img/Africa.png')
             }else{
                 //Idoso
                 img.setAttribute('src','img/Africa.png')
             }
         }else if(fsex[1].checked){
             genero = 'Mulher'
             if (idade >=0 && idade <10) {
                 //Criança
             }else if (idade <21) {
                 //Jovem
             }else if (idade <50 ){
                 //Adulta
             }else{
                 //Idosa
             }
         }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //Colocando um conteudo por baixo.
  
        res.appendChild(img)
    
 }
 }
 