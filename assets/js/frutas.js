
function agregarFrutas(){
  var elementoEntrada = document.getElementById('texto').value;
  var node = document.createElement('li');
  var textoNode = document.createTextNode(elementoEntrada);
  node.appendChild(textoNode);
  document.getElementById('lista').appendChild(node);
}
