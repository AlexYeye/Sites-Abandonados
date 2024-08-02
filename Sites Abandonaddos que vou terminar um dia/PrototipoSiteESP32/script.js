const lamp = document.getElementById("lamp");
const body = document.body;
let isOn = false;



lamp.addEventListener("click", () => {
  lamp.classList.toggle("on");
  body.classList.toggle("light-on");
});
