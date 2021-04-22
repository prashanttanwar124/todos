//todos Array
var todos = [];

//Dom Input Field
var input = document.getElementById("input");

//Add Todo Button
var addBtn = document.getElementById("addBtn");

//Main Div For Todo
var todosDiv = document.getElementById("todos");

//Todo Length
var count = document.getElementById("count");
count.innerHTML = 0;

//On click EventListener
addBtn.addEventListener("click", function () {
  logicPart();
});

function logicPart() {
  if (input.value != "") {
    todos.push(input.value);

    var div = document.createElement("div");

    var icon = document.createElement("div");

    icon.className = "dangerBtn";

    icon.innerHTML = "Delete";

    div.className = "todo";

    div.id = todos.length + "Inner";

    icon.onclick = function () {
      var index = todos.indexOf(div.innerHTML);
      todos.splice(index, 1);
      div.remove();
      countNum();

      console.log(todos);
    };

    div.innerHTML = todos[todos.length - 1];

    todosDiv.appendChild(div);

    var deleteBtn = document.getElementById(todos.length + "Inner");

    deleteBtn.appendChild(icon);

    countNum();

    input.value = "";
  } else {
    alert("Input Empty");
  }
}

var countNum = () => (count.innerHTML = todos.length);

document.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    logicPart();
  }
});

document.getElementById("clearAllTodos").addEventListener("click", function () {
  document.getElementById("todos").innerHTML = "";
  todos = [];
  countNum();
});
