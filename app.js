const addItem = document.getElementById("add-btn");
const deleteItem = document.getElementById("delete-btn");
const listItem = document.getElementById("demo");

addItem.addEventListener("click", AddItem);
function AddItem() {
  // Get the Userinput
  let getInput = document.getElementById("user-input").value;
  let list = document.createElement("li");

  // Attach the Userinput date to the List Items
  list.appendChild(document.createTextNode(getInput));
  let addedItem = listItem.appendChild(list);

  // Show up the message box
  let showMsgBox = (document.querySelector(".message-box").style.visibility =
    "visible");
  let msgSuccess = (document.querySelector(".message-box p").textContent =
    "Task has been added.");

  if (addedItem && getInput) {
    showMsgBox
    msgSuccess
  } else {
    showMsgBox.style.visibility = "hidden";
  }
}

// Erase the given input Data in Input field
const eraseInput = document.getElementById("x-btn");

eraseInput.addEventListener("click", EraseInput);
function EraseInput() {
  let getInput = (document.getElementById("user-input").value = "");
}

