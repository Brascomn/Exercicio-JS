function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var tudo = window.document.getElementById('Tudo');
    var data =  new Date();
    let datas = new Date();
    let seg= new Date();
    let min = datas.getMinutes();
    var hora = data.getHours();
    let o = seg.getSeconds();
    msg.innerHTML=`Agora são ${hora}hrs e ${min}min e ${o}s `

        if (hora>=0 && hora<12) {
        //Bom dia 
        img.src ='img/Manhã.png'
        tudo.innerHTML=" </br>Bom dia mundo</br> Não estragou nada, só aumentou no Amor"
        document.body.style.background='#e2cb9f'
        }else if (hora >=12 && hora <=18) {
        //Boa tarde
        img.src ='img/meio_dia.png'
        tudo.innerHTML=" </br>Bom dia mundo  </br> Não estragou nada, só aumentou no Amor "
        document.body.style.background='#e2cd9f'
        }else{
        //Boa noite
        img.src ='img/Noite.png'
        tudo.innerHTML=" </br>Boa Noite mundo </br>Não estragou nada, só aumentou no Amor "
        document.body.style.background='rgb(40, 40, 56)'
        }
        }
