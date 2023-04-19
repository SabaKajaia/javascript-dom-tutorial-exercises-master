let list = document.querySelector("#parentLi");
let childs = list.childNodes;
console.log(childs)

// Elimina el segundo elemento hijo
list.removeChild(childs[3]); 