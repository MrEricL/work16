var list = document.getElementById('thelist');
var listItem = document.getElementsByTagName("li");
var header = document.getElementById('h');
var index = 8;

b.addEventListener('click', add_to_list);

//fib stuff
var fiblist = document.getElementById('fiblist');
var n1=0;
var n2=1;


button2.addEventListener('click', fib);


//Functions
function add_to_list(){

    var node = document.createElement('li');
    var textnode = document.createTextNode('item '+index);
    index++;
    node.appendChild(textnode);
    list.appendChild(node);

    //add event listeners
    node.addEventListener('mouseover', change_header);
	node.addEventListener('mouseleave', revert_header);
	node.addEventListener('click', remove_from_list);
};

var change_header = function(e){
	header.textContent = this.textContent;
};

var revert_header = function(e){
	header.textContent = "Hello World!";
};

var remove_from_list = function(e){
	this.remove();
};

//To add the event listeners to each prev list item

for (i = 0; i < listItem.length; i ++) {
    listItem[i].addEventListener('mouseover', change_header);
	listItem[i].addEventListener('mouseleave', revert_header);
	listItem[i].addEventListener('click', remove_from_list);
};

function fib(){
    var n1temp = n1;
    var n2temp = n2;
    var node = document.createElement('li');
    var textnode = document.createTextNode(n2);
    node.appendChild(textnode);
    fiblist.appendChild(node);
    n1=n2temp;
    n2=n1temp+n2temp;

};