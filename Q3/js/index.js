function createToDo(){
  var todo = document.createElement("div");
  var span = document.createElement("span");
  var input = document.getElementById("input").value;
  if (input == ""){
    input = "內容是空白的";
  }
  span.innerHTML = input;
  todo.appendChild(span);

  var replaceButton = document.createElement("button");
  replaceButton.onclick = function(){
    var input = document.getElementById("input").value;
    if (input == ""){
      alert("You have to write something");
      return;
    }
    this.parentNode.firstChild.innerHTML = input;
    document.getElementById("input").value = "";
  }
  replaceButton.textContent = "R";
  todo.appendChild(replaceButton);

  var removeButton = document.createElement("button");
  removeButton.onclick = function(){
    var yn = confirm("Delete?")
    if (yn == true){
      this.parentNode.parentNode.removeChild(this.parentNode);
    }
  }
  removeButton.textContent = "V";
  todo.appendChild(removeButton);

  var todolist = document.getElementById("todolist");
  todolist.appendChild(todo);
  document.getElementById("input").value="";
}
