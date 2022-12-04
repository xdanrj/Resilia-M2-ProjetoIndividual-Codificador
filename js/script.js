const selecione = document.querySelector(".select");
const incremento = document.querySelector(".chaveContainer");
const btn = document.querySelector("#botaoCodificar"); // "button"
const radiobtn = document.querySelector(".radioButton");
const codificar = document.querySelector("#codificar");
const decodificar = document.querySelector("#decodificar");
const btncomousar = document.querySelector("#botaoComoUsar");
const btnvoltar = document.querySelector("#botaoVoltar");
const cxajuda = document.querySelector(".caixaAjuda");
const cxprincipal = document.querySelector(".caixaPrincipal");

// Botao Como Usar
btncomousar.addEventListener("click", function(){
  cxajuda.style.opacity = "100%";
  cxajuda.style.display = "inline";

  cxajuda.style.visibility = "visible";
  cxprincipal.style.visibility = "hidden";
});

// Botao Voltar para Tela Principal
btnvoltar.addEventListener("click", function (){
  cxajuda.style.opacity = "0%";
  cxajuda.style.display = "none";

  cxajuda.style.visibility = "hidden";
  cxprincipal.style.visibility = "visible";
});

// Incremento da Cifra de César
selecione.addEventListener("click", function (){
  if(selecione.value == "cifra") {
    incremento.style.display = "block";
  }
  else{
    incremento.style.display = "none";
  }});

// Base64

function base64() {
  let mensagem = document.querySelector("#mensagem").value;

  if (codificar.checked) {
    let codificado = btoa(mensagem);
    return codificado;
  }
  else if (decodificar.checked) {
    let decodificado = atob(mensagem);
    return decodificado;
  }
}

// Cifra de César

function cifraCesar() {
  let msg = document.querySelector("#mensagem").value;
  let chave = parseInt(document.querySelector("#rangenumber").value);
  let saida = '';

  //escolha CODIFICAR ativa
  if (codificar.checked) {
    for (let i = 0; i < msg.length; i++) { 
      // Se o caractere for MAIUSCULO, substituia por caractere MAIUSCULO
      if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        saida += String.fromCharCode((msg.charCodeAt(i) + chave - 65) % 26 + 65); 
      } 

      // Se o caractere for MINUSCULO, substituia por caractere MINUSCULO
      else if(msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
        saida += String.fromCharCode((msg.charCodeAt(i) + chave - 97) % 26 + 97);
      }

      // Se o caractere NÃO FOR letra MAIUSCULA/ MINUSCULA (ou seja: carac. especial ou numero) substituia por ele mesmo
      else {
        saida += msg[i];
      }
    }
    return saida;

    
  //escolha DECODIFICAR ativa
  } else if (decodificar.checked) {
    for (let i = 0; i < msg.length; i++) {
      // Se o caractere for MAIUSCULO, substituia por caractere MAIUSCULO
      if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
      }

      // Se o caractere for MINUSCULO, substituia por caractere MINUSCULO
      else if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);
      } 

      // Se o caractere NÃO FOR letra MAIUSCULA/ MINUSCULA (ou seja: carac. especial ou numero) substituia por ele mesmo
      else {
        saida += String.fromCharCode(msg.charCodeAt(i));
      }
    }
    return saida;
  }
}

// Botão de escolha codificar/ decodificar
radiobtn.addEventListener("click", function () {
  if (codificar.checked) {
    btn.innerHTML = "CODIFICAR MENSAGEM";
  } 
  else if (decodificar.checked) {
    btn.innerHTML = "DECODIFICAR MENSAGEM";
  }
});

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (selecione.value === "base64") {
    resultado.innerText = base64();
  } 
  else if (selecione.value === "cifra") {
    resultado.innerText = cifraCesar();
  }
});
