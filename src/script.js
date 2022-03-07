const btnMenu = document.getElementById("btn-menu");
const sidebar = document.getElementById("sidebar");
const input = document.getElementById("input");
const items = document.getElementById("items");
const link = document.querySelectorAll(".off-link");

btnMenu.onclick = () => {
  sidebar.classList.toggle("fechado");
  input.classList.toggle("fechado");
  items.classList.toggle("fechado");
  link.forEach((link) => {
    link.classList.toggle("fechado");
  });
};
