var a = document.getElementById('thelist');

a.addEventListener('click', add_to_list);

var add_to_list = function(){
    var node = document.createElement('LI');
    var textnode = document.createTextNode('item');
    node.appendChild(textnode);
    a.appendChild(node);
};
