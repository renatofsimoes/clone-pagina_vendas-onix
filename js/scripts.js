const btn = document.querySelectorAll(".btn");
const btn_white = document.querySelector("#btn-white");
const btn_blue = document.querySelector("#btn-blue");
const btn_grey = document.querySelector("#btn-grey");
const btn_silver = document.querySelector("#btn-silver");
const btn_black = document.querySelector("#btn-black");
const btn_red = document.querySelector("#btn-red");
const btn_hover = document.querySelectorAll(".btn-hover");
const white_hover = document.querySelector("#white-hover");
const blue_hover = document.querySelector("#blue-hover");
const grey_hover = document.querySelector("#grey-hover");
const silver_hover = document.querySelector("#silver-hover");
const black_hover = document.querySelector("#black-hover");
const red_hover = document.querySelector("#red-hover");
let btnSelecionado = null; // guarda o ID do botão clicado

function changeBtnHoverColor(btn_id) {
  switch (btn_id) {
    case "btn-white":
      white_hover.style.backgroundColor = "#bfbfbf";
      return;
    case "btn-blue":
      blue_hover.style.backgroundColor = "#bfbfbf";
      return;
    case "btn-grey":
      grey_hover.style.backgroundColor = "#bfbfbf";
      return;
    case "btn-silver":
      silver_hover.style.backgroundColor = "#bfbfbf";
      return;
    case "btn-black":
      black_hover.style.backgroundColor = "#bfbfbf";
      return;
    case "btn-red":
      red_hover.style.backgroundColor = "#bfbfbf";
      return;
  }
}
function changeBtnHoverColorStatic(btn_id) {
  switch (btn_id) {
    case "btn-white":
      white_hover.style.backgroundColor = "#000";
      return;
    case "btn-blue":
      blue_hover.style.backgroundColor = "#0d6673";
      return;
    case "btn-grey":
      grey_hover.style.backgroundColor = "#b4bfc7";
      return;
    case "btn-silver":
      silver_hover.style.backgroundColor = "#86929b";
      return;
    case "btn-black":
      black_hover.style.backgroundColor = "#000";
      return;
    case "btn-red":
      red_hover.style.backgroundColor = "#791c25";
      return;
  }
}

function reChangeBtnHoverColor() {
  white_hover.style.backgroundColor = "";
  blue_hover.style.backgroundColor = "";
  grey_hover.style.backgroundColor = "";
  silver_hover.style.backgroundColor = "";
  black_hover.style.backgroundColor = "";
  red_hover.style.backgroundColor = "";
}

btn.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    changeBtnHoverColor(btn.id);
  });

  btn.addEventListener("mouseleave", () => {
    if (btn.id !== btnSelecionado) {
      reChangeBtnHoverColor();
    }
  });
});

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnSelecionado = btn.id;
    reChangeBtnHoverColor();
    changeBtnHoverColorStatic(btn.id);
  });
});
