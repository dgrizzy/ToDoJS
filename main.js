// DOM SELECTION SHORTCUT
var goButton = document.getElementById('goButton');

var ourList = document.getElementById("theList");

// Define Counter for taskNumbers
var doneTasks = {finishedTasks : 0,
                 countFinished : function () {
                   this.finishedTasks += 1;
                 }
}

// Define an Object to Count Total Tasks
var taskNumber = {totalTasks : 0 ,
                  increaseTask : function () {
                    this.totalTasks += 1;
                  }
}

// Create Function for Finishing a Task
var finishTask = function() {

  // Remove the Current Node
  this.parentNode.removeChild(this)

  doneTasks.countFinished()

  document.getElementById("taskCounter").innerText = "So far you have compleated " + doneTasks.finishedTasks.toString() + " tasks.";
}

// Function for Adding a New Task
var addNewTask = function() {
  // Select Current User Input
  var inputBoxValue = document.getElementById('newTask').value;

  // Create LI Button
  var newLI = document.createElement("li");

  // Create Inner Button Element
  var innerButton = document.createElement('button');

  // Set Button's Text to User Input
  innerButton.innerText = inputBoxValue;

  // Add the ID Here
  newLI.id = 'taskNumber'+ String(taskNumber.totalTasks);

  // Append the Elements as Tree
  newLI.appendChild(innerButton);
  ourList.appendChild(newLI);

  // Add the Event Listner For the Decreasing the Task
  document.getElementById('taskNumber'+ String(taskNumber.totalTasks)).addEventListener("click", finishTask)

  // Reset the Forum Value
  document.getElementById("newTask").value = "";

  // Increase the Global Task Number
  taskNumber.increaseTask();
}

// ADD CRITICAL EVENT LISTNERS
// GO Button onClick
goButton.addEventListener("click", addNewTask);

// GO Button onEnter
// Enter Key = 13
document.getElementById('newTask').addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    addNewTask();
  }
});
