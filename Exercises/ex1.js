

var mydiv = document.getElementById("addLi")



mydiv.onclick = function () {
	var newli = document.createElement('li');

	var theText = document.createTextNode("Bla bla bla bla");

	newli.appendChild(theText);

	var mylist = document.getElementById("list");

	mylist.appendChild(newli);
};