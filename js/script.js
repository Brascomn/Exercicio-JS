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
    msg.innerHTML=`Agora são ${hora}hrs e ${min}min e ${o} `

if (hora>=0 && hora<12) {
//Bom dia 
img.src ='img/Amanha.jpg'
tudo.innerHTML="Não estragou nada,Só aumentou no Amor </br>Bom dia mundo"
document.body.style.background='#e2cb9f'
}else if (hora >=12 && hora <=18) {
//Boa tarde
img.src ='img/IMG_20210428_170220_0.jpg'
tudo.innerHTML="Não estragou nada,Só aumentou no Amor </br>Boa Tarde mundo"
document.body.style.background='#e2cd9f'
}else{
//Boa noite
img.src ='img/Noitinha.jpg'
tudo.innerHTML="Não estragou nada,Só aumentou no Amor </br>Boa Noite mundo"
document.body.style.background='rgb(40, 40, 56)'
}
}
