function select_tab(id) {
  document
    .querySelectorAll(".route")
    .forEach((item) => item.classList.remove("selected"));
  document
    .querySelectorAll("#" + id)
    .forEach((item) => item.classList.add("selected"));
}
function load_content(id) {
  require([`./src/Pages/${id}`], (component) => {
    document.querySelector("#content").innerText = "";
    document.querySelector("#content").appendChild(component);
  });
}
function push(event) {
  let id = event.target.id;
  select_tab(id);
  document.title = id;
  load_content(id);
  window.history.pushState({ id }, `${id}`);
}
window.onload = (event) => {
  window["home"].addEventListener("click", (event) => push(event));
  window["about"].addEventListener("click", (event) => push(event));
  window["gallery"].addEventListener("click", (event) => push(event));
  window["contact"].addEventListener("click", (event) => push(event));
  window["help"].addEventListener("click", (event) => push(event));
  require([`./src/Pages/Home`], function (component) {
    document.querySelector("#content").innerText = "";
    document.querySelector("#content").appendChild(component);
  });
};
window.addEventListener("popstate", (event) => {
  let stateId = event.state.id;
  console.log("stateId = ", stateId);
  select_tab(stateId);
  load_content(stateId);
});
