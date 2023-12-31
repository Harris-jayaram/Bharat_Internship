function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");
    li.classList.add("task-item");
    
    var taskText = document.createElement("span");
    taskText.appendChild(document.createTextNode(taskInput.value));
    li.appendChild(taskText);

    var dateTime = document.createElement("span");
    dateTime.classList.add("date-time");
    dateTime.appendChild(document.createTextNode(getFormattedDateTime()));
    li.appendChild(dateTime);

    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = "";

    // Add a reminder after 2 seconds
    setTimeout(function () {
        li.classList.add("reminder");
    }, 2000);
}

function getFormattedDateTime() {
    var now = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}
