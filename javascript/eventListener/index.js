// Caching DOM Elements
const cList = document.getElementById("commentList"); // ul
const cInput = document.getElementById("commentInput"); // input
const cBtn = document.getElementById("addCommentBtn"); // button

// logic

function addComment() {
  // return if the input value is empty
  if (cInput.value === "") return;
  console.log(cInput);
  // access and store the text from the input
  const text = cInput.value;
  // create a new li
  const li = document.createElement("li");
  // set the textContent to the text from the input
  li.textContent = text;
  // append it to the ul
  cList.appendChild(li);
  // clears the value in the input
  cInput.value = "";
  // focus or go back to the input
  cInput.focus();
}

// register event listener to the button
cBtn.addEventListener("click", addComment);