let elementoJavaScript = document.createElement("h1");

elementoJavaScript.innerText = "Tomada"
elementoJavaScript.id = "tomada"
console.log(elementoJavaScript);

let listaLinguagens = document.querySelector(".produto");
listaLinguagens.appendChild(elementoJavaScript);

const postagemJavaScript = document.createElement("div");

postagemJavaScript.innerHTML = 
`<h2 class="nome">Tomada Philco</h2>
<p class="descricao">
Tomada 3 pinos
</p>
<p class="preco">
R$10.00
</p>`

const postagens = document.querySelector(".produto");
postagens.appendChild(postagemJavaScript);