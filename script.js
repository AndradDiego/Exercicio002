function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("ERROR");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "fotos/Homem-criança.png");
      } else if (idade < 21) {
        img.setAttribute('src','fotos/Jovem-Homem.png')
      } else if (idade < 50) {
        img.setAttribute('src','Adulto.png')
      } else {
        img.setAttribute('src','fotos/idoso.png')
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src','fotos/Mulher-criança.png')
      } else if (idade < 21) {
        img.setAttribute('src','fotos/Jovem-Mulher.png')
      } else if (idade < 50) {
       img.setAttribute('src','fotos/Adulta.png')
      } else {
        img.setAttribute('src','fotos/idosa.png')
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Decectamos um(a) ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
