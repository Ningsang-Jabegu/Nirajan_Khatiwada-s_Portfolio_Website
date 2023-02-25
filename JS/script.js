const dropdown = document.querySelector(".dropdown");
const dropdown_content = document.querySelector(".dropdown-content");

dropdown.addEventListener("click", function () {
  alert("hi there");
  dropdown_content.style.display = "block";
});

document.addEventListener("click", function (event) {
if (!dropdown.contains(event.target)) {
  dropdown_content.style.display = "none";
}
});