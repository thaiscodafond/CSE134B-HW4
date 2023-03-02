//Prompt part

var openNDialog = document.getElementById("prompt-btn");
var promptDialog = document.getElementById("prompt");
var outputDialog = document.querySelector("#prompt-output");
var confirmBtn = document.getElementById("confirmBtn");
var closeDialog = document.getElementById("closeDialog");

openNDialog.addEventListener("click", function onOpen() {
  promptDialog.showModal();
});

promptDialog.addEventListener("close", function () {
  let name = DOMPurify.sanitize(document.getElementById("nameInfo").value);
  const message = DOMPurify.sanitize(name)
          ? `Your name is : ${name} !`
          : "User didn't enter anything";
        document.getElementById("prompt-output").textContent = message;
  }
);

closeDialog.addEventListener("click", function () {
  promptDialog.close();
});

promptDialog.addEventListener("click", (event) => {
  const rect = promptDialog.getBoundingClientRect();
});

//Confirm part
var openCDialog = document.getElementById("confirm-btn");
var confirmDialog = document.getElementById("confirm");
var submitButton = document.getElementById("confirmtrue");
var cancelButton = document.getElementById("closeDialogconf");

openCDialog.addEventListener("click", function onOpen() {
  confirmDialog.showModal();
});

submitButton.addEventListener("click", () => {
  document.getElementById("confirm-output").innerText = "User sent : True";
  confirmDialog.close();
});

cancelButton.addEventListener("click", function () {
  document.getElementById("confirm-output").innerText = "User sent : False";
  confirmDialog.close();
});

//Alert part
var openADialog = document.getElementById("alert-btn");
var alertDialog = document.getElementById("alert");
var closeButton = document.getElementById("close-dialog-alert");

openADialog.addEventListener("click", function onOpen() {
    alertDialog.showModal();
});

closeButton.addEventListener("click", function () {
  alertDialog.close();
});
