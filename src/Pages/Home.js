define(function () {
  const home = document.createElement("div");
  home.style.display = "flex";

  const leftSide = document.createElement("div");
  leftSide.style.display = "flex";
  leftSide.style.width = "30%";
  leftSide.style.flexDirection = "column";

  const img = document.createElement("img");
  img.src = "../../assets/home-img.png";
  img.style.width = "100%";

  const postImg = document.createElement("div");
  postImg.style.border = "2px solid #555";
  postImg.style.padding = "8px";
  postImg.style.margin = "8px 0 0 0";
  postImg.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tortor ullamcorper, feugiat purus ut, auctor mi.";

  leftSide.appendChild(img);
  leftSide.appendChild(postImg);

  const rightSide = document.createElement("div");
  rightSide.style.width = "70%";
  rightSide.style.margin = "0 0 0 24px";

  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tortor ullamcorper, feugiat purus ut, auctor mi. Maecenas tristique mauris in ipsum eleifend, in commodo felis rutrum. Etiam eget nunc dolor. Nunc lacinia venenatis mattis. Proin pellentesque luctus nunc in semper. Nulla mi magna, vulputate vel ipsum ac, euismod rhoncus orci. Nam porta lobortis lacus, eu tempor felis pellentesque eu. Maecenas blandit sodales sapien, sed tempor purus facilisis in. Nullam imperdiet ultricies fermentum. Etiam condimentum sapien risus, eget pretium orci sodales eget. Praesent porttitor ligula vel magna consequat tincidunt. Nullam finibus erat tortor, nec ornare ligula blandit nec. Sed massa sapien, tristique sit amet velit vitae, lobortis maximus justo.",
    "Donec non dolor laoreet, faucibus dolor non, pharetra neque. Aliquam bibendum lacus sit amet quam blandit condimentum. Morbi euismod massa sit amet urna iaculis, at luctus elit ultrices. Duis ac ultrices tortor, sit amet euismod erat. Nunc id nulla a ligula euismod tincidunt. Aliquam posuere lorem in rutrum fermentum. Praesent gravida leo non ipsum egestas tincidunt. Suspendisse volutpat nibh at tincidunt ornare. Nam laoreet suscipit purus vitae cursus. Morbi euismod velit enim. Sed diam ligula, mattis non ipsum nec, tempor sollicitudin enim. Praesent at semper elit, et hendrerit augue.",
    "Proin lacus lectus, pharetra non nibh nec, ornare sodales nunc. In ac molestie est. Sed tincidunt finibus purus, a rhoncus enim malesuada vel. Proin sit amet dui fringilla, commodo nibh vitae, accumsan elit. Duis sit amet eleifend lectus. Vivamus pretium convallis orci eu congue. Nam sed eros erat. Curabitur quis augue non orci volutpat posuere. Integer vel urna quis purus eleifend accumsan id non odio. Pellentesque pharetra sit amet diam vel auctor. Nullam porttitor efficitur odio et porta. Curabitur faucibus sem ornare, volutpat lectus at, porta felis. Suspendisse posuere arcu at dolor vehicula, at pellentesque massa vehicula. Praesent ac lacinia velit.",
    "Etiam malesuada erat dolor, non gravida orci varius eu. Fusce vehicula blandit lacus vitae facilisis. Sed a arcu non est molestie sodales eu eu lacus. Quisque placerat libero velit, ut aliquam elit sodales quis. Curabitur eu massa sed risus dictum fermentum. Curabitur quis metus mauris. Pellentesque justo felis, accumsan ac faucibus vitae, lobortis eget purus. Vestibulum sed magna gravida, rutrum ex quis, feugiat velit. Cras posuere libero at feugiat iaculis. Nunc tincidunt, augue ac consectetur pellentesque, lacus orci consequat diam, ac pretium ipsum erat eget ex. Phasellus et imperdiet neque, vel consectetur risus. In dictum urna ac leo varius vehicula. Nam feugiat ex ac libero gravida, eget imperdiet odio sodales. Ut egestas suscipit mauris, in hendrerit metus pretium vel. Vivamus et cursus purus, sit amet maximus erat.",
    "Sed molestie ipsum quis magna eleifend pharetra. Duis accumsan erat fermentum euismod luctus. Aliquam lobortis gravida ipsum, ac tincidunt mi finibus eget. Proin sit amet nulla eget risus pretium tristique at a est. Suspendisse accumsan nulla ac tortor pulvinar facilisis. Suspendisse potenti. Duis nibh enim, mattis eu imperdiet posuere, efficitur ac erat. Fusce a auctor dui. Praesent dictum neque velit, ut commodo orci maximus et.",
  ];

  paragraphs.forEach((text) => {
    require(["./src/Components/Paragraph"], (Paragraph) => {
      rightSide.appendChild(Paragraph(text));
    });
  });

  home.appendChild(leftSide);
  home.appendChild(rightSide);
  return home;
});
