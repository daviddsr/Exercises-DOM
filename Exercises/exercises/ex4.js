var mydiv = document.getElementById("addLi")



mydiv.onclick = addingItems;



function addingItems() {
	var newli = document.createElement('li');

	var newdiv = document.createElement('div');

	newdiv.className="imp-btn";


	var inputText = document.getElementById('boxinput').value;
	var content = document.getElementById('boxinput2').value;
	storedb(inputText,content);

	var text = document.createTextNode(inputText);

	newli.appendChild(text);
	newli.appendChild(newdiv);

	var mylist = document.getElementById("list");

	mylist.appendChild(newli);


	newli.onclick = myfunction;
	newdiv.onclick = getbold;
};

function storedb(key,value) {
	window.localStorage.setItem(key,value);
}

function getbold(event) {

	var myClassList = event.target.parentNode.classList;
	if (myClassList.contains('important')) { 
		myClassList.remove('important');
	} else {
			myClassList.add('important');
	}
}


function myfunction(event) {
	if(event.target.nodeName !='LI')
		return false;
	
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