define(function () {
  function MenuItem({ id, label, selected = false }) {
    const item = document.createElement("section");
    item.innerText = label;
    item.classList.add("route");
    if (selected) item.classList.add("selected");
    item.id = id;
    return item;
  }
  return MenuItem;
});
