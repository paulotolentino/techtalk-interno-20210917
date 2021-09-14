define(function () {
  function Paragraph(text) {
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    paragraph.style.margin = "0 0 24px 0";
    return paragraph;
  }
  return Paragraph;
});
