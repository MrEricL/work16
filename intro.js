// List
var a = document.getElementById('thelist');

//Button


b.addEventListener('click', add_to_list);
//a.addEventListener('mouseover', )

function add_to_list (){
    var node = document.createElement('LI');
    var textnode = document.createTextNode('item');
    node.appendChild(textnode);
    a.appendChild(node);
};
