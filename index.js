function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");

  let textoCifrado = texto
  .replace(/e/gi, "ente")
  .replace(/i/gi, "ime")
  .replace(/a/gi, "ai")
  .replace(/o/gi, "obe")
  .replace(/u/gi, "ufa");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    document.getElementById("titulo-mensaje").textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    imagen.src = "./img/ping.png";
  } else {
    imagen.src = "./img/esq.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    Swal.fire("Ingresa un texto")
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");

  let textoCifrado = texto
    .replace(/ente/gi, "e")
    .replace(/ime/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/obe/gi, "o")
    .replace(/ufa/gi, "u");

    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
    document.getElementById("titulo-mensaje").textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    imagen.src = "./img/ping.png";
    } else{
      imagen.src = "./img/esq.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      Swal.fire("Primero ingresa el texto!");
    }
}

