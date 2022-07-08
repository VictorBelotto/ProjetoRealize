var imagens = ["img/casal.jpg", "img/casa1.jpg", "img/apartamento.jpg"];

function trocaImagem() {
    imagemAtual = (imagemAtual + 1) % 2;
   document.querySelector('img .rotativo').src = imagens[imagemAtual];
   }
   setInterval(trocaImagem, 1500);