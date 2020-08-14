function add_to_cart(name,num){
	var a = document.getElementById("cart");
	var node = document.createElement("P");
	node.setAttribute("id",num);
	var textNode = document.createTextNode(name);
	node.appendChild(textNode);
	a.appendChild(node);
}

function remove_from_cart(name,num){
	var a = document.getElementById("cart");
	var b = document.getElementById(num);
	a.removeChild(b);

}