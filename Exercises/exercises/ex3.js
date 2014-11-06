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


var buttonremovedone = document.getElementById('removeDone')

buttonremovedone.onclick = removedone

var buttonremoveall = document.getElementById('removeAll')

buttonremoveall.onclick = removeall


function removedone() {
	var newlidone = document.getElementsByClassName('done')
	for(var i=0;i<newlidone.length;i++) {
		newlidone[i].remove();

	}
		

};

function removeall() {
	var lis = document.getElementsByTagName('li')
	for(var i=0;i<newli.length;i++)
	lis[i].remove();
};


