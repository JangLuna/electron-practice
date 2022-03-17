const setTitleButton = document.getElementById("set-title-btn");
const titleInput = document.getElementById("input-title");

setTitleButton.addEventListener("click", () => {
  const title = titleInput.value;
  window.electronAPI.setTitle(title);
});

const fileBtn = document.getElementById("file-btn");
const filePathElement = document.getElementById("filePath");

fileBtn.addEventListener("click", async () => {
  const filePath = await window.electronAPI.openFile();
  filePathElement.innerText = filePath;
});

const counter = document.getElementById("counter");

window.preLoadedElectronAPI.updateCounter((event, value) => {
  console.log(event);
  const oldValue = Number(counter.innerText);
  const newValue = oldValue + value;

  counter.innerText = newValue;

  // event.sender.send instead of event.reply
  event.sender.send("counter-value", newValue);
});
