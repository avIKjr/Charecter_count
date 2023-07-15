const textArea = document.getElementById("textarea");
const totalCounter = document.getElementById("Total-counter");
const remainingCounter = document.getElementById("Remaining-counter");

textArea.addEventListener("keyup", () => {
  updateCounter();
});
function updateCounter() {
  totalCounter.innerHTML = textArea.value.length;
  remainingCounter.innerHTML =
    textArea.getAttribute("maxLength") - textArea.value.length;
  //!or we can Write the second line as
  //remainingCounter.innerHTML = 100 - textArea.value.length;
}
