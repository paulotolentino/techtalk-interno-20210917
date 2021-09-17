define(function () {
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

  require(["./src/Components/MenuItem"], function (MenuItem) {
    itens.forEach((item) => {
      sidemenu.appendChild(MenuItem(item));
    });
  });
  app.appendChild(sidemenu);

  const main = document.createElement("main");
  main.id = "content";
  main.innerText = "Content loading...";
  app.appendChild(main);
  return app;
});
