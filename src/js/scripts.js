const buttonId =  document.getElementById("bt");
const textId =  document.getElementById("txt");

buttonId.addEventListener("click", () => {
    win.style.display = "block";
  });
  textId.addEventListener("click", () => {
    txt.value = "";
  });