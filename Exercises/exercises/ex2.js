var mydiv = document.getElementById("addLi")



mydiv.onclick = addingItems;

function addingItems() {
	var newli = document.createElement('li');

	var theText = document.createTextNode("Bla bla bla bla");

	newli.appendChild(theText);

	var mylist = document.getElementById("list");

	mylist.appendChild(newli);
	newli.onclick = myfunction;
};

function myfunction(event) {
	var myClassList = event.target.classList;
	console.log(myClassList);
	if (myClassList.contains('done')) { 
		myClassList.remove('done');
	} else {
			myClassList.add('done');
	}
}