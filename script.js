const items = document.querySelectorAll("li");

items.forEach(item => {
  item.addEventListener("click", () => {
    alert(`${item.innerText} clicked 🚀`);
  });
});