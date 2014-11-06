window.onload = undoneTasks();  //<body onload="myFunction()"> or script after HTML

var button = document.getElementById('addLi');
var removeDone = document.getElementById('removeDone');
var removeAll = document.getElementById('removeAll');

button.onclick = addLiToList;
// button.addEventListener('click', addLiToList);
removeDone.onclick = doRemoveDone;
removeAll.onclick = doRemoveAll;

function addLiToList(){
  var li = document.createElement('li');
  var div = document.createElement('div');
  div.setAttribute("id", "setImportance");
  div.setAttribute("class", "imp-btn");
  li.innerText = 'lalalalala';
  li.appendChild(div);
  li.onclick = doneUndone;
  div.onclick = setImportance;
  // li.addEventListener('click', doneUndone);
  var ul = document.getElementById('list');
  ul.appendChild(li);
  undoneTasks(); 
}

function doneUndone(e){
  var cList = e.target.classList;
  if(cList.contains('done')){
    cList.remove('done');
  }else{
    cList.add('done');
  }
  undoneTasks(); 
}

function doRemoveDone(){
  var done = document.getElementsByClassName('done');
  while(done.length > 0){
    done[0].remove();
  }
  undoneTasks(); 
}

function doRemoveAll(){
  var LIs = document.getElementsByTagName('li');
  while(LIs.length > 0){
    LIs[0].remove();
  }
  undoneTasks(); 
}

function setImportance(e){
  var li = e.target.parentNode;
  var myClases = li.classList;
  if (myClases.contains('important')){
    myClases.remove('important');
  }else{
    myClases.add('important');
  }
  
}

function undoneTasks(){
  var ul = document.getElementById('list');
  var div = document.getElementById('undone-tasks');
  var count = 0;
  if(ul.hasChildNodes()){
    var lis = document.getElementsByTagName('li');
    for(var i=0;i<lis.length;i++){
      if(lis[i].className == ""){
        count++;
      }
    }
  }
  div.innerText = count;
}

