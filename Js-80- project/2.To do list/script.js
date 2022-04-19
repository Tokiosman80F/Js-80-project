// DEFINING UI ELEMENT
let form = document.querySelector("#task-form");
let taskList = document.querySelector("ul");
let clearBtn = document.querySelector("#clear-task-btn");
let filter = document.querySelector("#task_filter");
let taskInput = document.querySelector("#new-task");

// DEFINE EVENT LISTENER
form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
clearBtn.addEventListener("click", clearTask);

// DEFINE FUNCTION
function addTask(event) {
  if (taskInput.value === " ") {
    alert("Add a task");
  } else {
    //CREATING LI(LIST)
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value + " "));
    taskList.appendChild(li);
    // CREATING CROSS x
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);

    // CLEARING INPUT FEILD
    taskInput.value = " ";
  }
  event.preventDefault();
}

// REMOVE TASK
function removeTask(event) {
  if (event.target.hasAttribute("href")) {
    if (confirm("Are you sure?")) {
      let element = event.target.parentElement;
      element.remove();
      console.log(element);
    }
  }
}

// CLEAR TASK
function clearTask(event) {
  taskList.remove();
}
