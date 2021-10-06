const addItem = document.getElementById("add-btn");
const deleteItem = document.getElementById("delete-btn");
const listItem = document.getElementById("task-item .title");


addItem.addEventListener("click", AddItem);
function AddItem() {
  // Get the Userinput
  let getInput = document.getElementById("user-input").value;
  let taskArray = ["bla bla bla", 1234];

  let newEls = taskArray.push(getInput)

  console.log(newEls);

  let list = document.createElement("li");
  


  // Attach the Userinput date to the List Items
  list.appendChild(document.createTextNode(getInput));
  let addedItem = listItem.appendChild(list);

  // Show the message box
  let notificationMsg = document.createElement("p");
  let showMsgBox = (document.querySelector(".message-box").style.visibility = "visible");
  let msgSuccess = (document.querySelector(".message-box").textContent = "Task has been added.");
  notificationMsg.appendChild(msgSuccess);


  if (addedItem && getInput) {
    showMsgBox
    msgSuccess
  } else {
    showMsgBox.style.visibility = "hidden";
  }

}




// Erase the given input Data in Input field
const removeItem = document.getElementById("delete-btn");

removeItem.addEventListener("click", EraseInput);
function EraseInput() {
  let getInput = document.getElementById("user-input").value;
}

