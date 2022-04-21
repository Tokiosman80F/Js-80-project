// DEFINING UI ELEMENT
let form = document.querySelector("#task-form");
let taskList = document.querySelector("ul");
let clearBtn = document.querySelector("#clear-task-btn");
let filter = document.querySelector("#task-filter");
let taskInput = document.querySelector("#new-task");

// DEFINE EVENT LISTENER
form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
clearBtn.addEventListener("click", clearTask);
filter.addEventListener("keyup", filterTask);
document.addEventListener("DOMContentLoaded", getTask);

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

    // LOCAL STORAGE
    storeTaskInLocalStorage(taskInput.value);
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
function clearTask() {
  taskList.remove();
}

// FILTER TASK
function filterTask(event) {
  let text = event.target.value.toLowerCase();
  document.querySelectorAll("li").forEach((task) => {
    let item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
  // console.log(text);
}

// STORE IN LOCAL STORE

function storeTaskInLocalStorage(work) {
  let tasks;
  //  CALLING LOCAL STORAGE
  if (localStorage.getItem("work") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem(tasks));
  }
  tasks.push(work);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTask() {
  let tasks;
  //  CALLING LOCAL STORAGE
  if (localStorage.getItem("task") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem(tasks));
  }
  tasks.forEach((work) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(work + " "));
    taskList.appendChild(li);
    // CREATING CROSS x
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);
  });
}
