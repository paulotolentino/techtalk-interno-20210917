const sidemenu = document.createElement("section");
sidemenu.id = "sidemenu";

const logo = document.createElement("img");
logo.id = "logo";
logo.src = "./assets/logo.jpg";
sidemenu.appendChild(logo);

const itens = [
  { label: "Home", id: "home", selected: true },
  { label: "About", id: "about" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
  { label: "Help", id: "help" },
];

itens.forEach(({ id, label, selected = false }) => {
  const newItem = document.createElement("section");
  newItem.innerText = label;
  newItem.classList.add("route");
  if (selected) newItem.classList.add("selected");
  newItem.id = id;
  sidemenu.appendChild(newItem);
});
const app = document.getElementById("app");
app.appendChild(sidemenu);

const main = document.createElement("main");
main.id = "content";
main.innerText = "Content loading...";
app.appendChild(main);
