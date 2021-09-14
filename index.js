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

const root = document.getElementById("root");
// require([`./src/App`], function (App) {
//   root.appendChild(App);
// });

const app = document.createElement("div");
app.id = "app";
app.style.display = "flex";
app.style.flexDirection = "row";
app.style.width = "100%";
app.style.height = "100%";
const sidemenu = document.createElement("section");
sidemenu.id = "sidemenu";

const logo = document.createElement("img");
logo.id = "logo";
logo.src = "./src/Assets/logo.jpg";
sidemenu.appendChild(logo);

const itens = [
  { label: "Home", id: "home", selected: true },
  { label: "About", id: "about" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
  { label: "Help", id: "help" },
];

itens.forEach((item) => {
  require(["./src/Components/MenuItem"], function (MenuItem) {
    sidemenu.appendChild(MenuItem(item));
  });
});
app.appendChild(sidemenu);

const main = document.createElement("main");
main.id = "content";
main.innerText = "Content loading...";
app.appendChild(main);
root.appendChild(app);
