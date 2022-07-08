

   var imagens = ["img/casal.jpg", "img/casa1.jpg", "img/apartamento.jpg"];
var imagematual = 0;

function trocaimagem() {
 imagematual = (imagematual + 1) % 3;
document.querySelector('.rotativo img'). src = imagens[imagematual];
}
setInterval(trocaimagem, 1500);