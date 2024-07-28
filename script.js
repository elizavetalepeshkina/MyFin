const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const applyBtns = document.querySelectorAll(".btn");
const form = document.getElementById("apply-form");

applyBtns.forEach(btn => {
  btn.onclick = function() {
      modal.style.display = "flex";
  }
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

form.onsubmit = function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  console.log("Имя: " + name);
  console.log("Почта: " + email);
  modal.style.display = "none";
}
