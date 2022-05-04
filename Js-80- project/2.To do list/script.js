//DEFINING ELEMNT
let form = document.getElementById("task_form");
let taskInput = document.getElementById("new_task");
let filter = document.getElementById("task_filter");
// ul
let taskList = document.getElementById("tasks");
// btn
let clearBtn = document.getElementById("clear_task_btn");

// DEFINING EVENT LISTENER
form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
clearBtn.addEventListener("click", clearTask);
filter.addEventListener("keyup", filterTask);
// getting the data from local storage and showing in Display
document.addEventListener("DOMContentLoaded", getTask);

// DEFINE FUNCTION

// ADD TASK
function addTask(e) {
  if (taskInput.value === "") {
    alert("add a task");
  } else {
    // Create List
    let list = document.createElement("li");
    list.appendChild(document.createTextNode(taskInput.value + " "));

    taskList.appendChild(list);

    // Creating a link
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.textContent = "X";
    list.appendChild(link);

    // local storage
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = "";
  }
  e.preventDefault();
}

// REMOVE TASK
function removeTask(e) {
  if (e.target.hasAttribute("href")) {
    if (confirm("Are you sure ?")) {
      let ele = e.target.parentElement;
      ele.remove();
      // REMOVE FROM LS
      removeFromLS(ele);
    }
  }
}

// CLEAR TASK
function clearTask(e) {
  taskList.textContent = " ";
  localStorage.clear();
}

// FILTER TASK
function filterTask(e) {
  let text = e.target.value.toLowerCase();
  document.querySelectorAll("li").forEach((task) => {
    let item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

// LOCAL STORAGE
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// getting the data from local storage and showing in Display
function getTask() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task) => {
    // Create List
    let list = document.createElement("li");
    list.appendChild(document.createTextNode(task + " "));

    // Creating a link
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.textContent = "X";
    list.appendChild(link);
    taskList.appendChild(list);
  });
}

//REMOVE FROM LOCAL STORAGE(LS)
function removeFromLS(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  let li = taskItem;
  li.removeChild(li.lastChild);
  tasks.forEach((task, index) => {
    if (li.textContent.trim() === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
