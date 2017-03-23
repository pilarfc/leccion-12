
function agregarFrutas(){
  var elementoEntrada = document.getElementById('texto').value;
  var node = document.createElement('li');
  var textoNode = document.createTextNode(elementoEntrada);
  node.appendChild(textoNode);
  document.getElementById('lista').appendChild(node);
}

function removerTexto () {

   var primeraLista = document.getElementById("lista");
   var elemento = document.getElementsByTagName("li");
   var i = elemento.length -1;
   primeraLista.removeChild(elemento[i]);
}
