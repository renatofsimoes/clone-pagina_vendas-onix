const btn = document.querySelectorAll(".btn");
const btn_white = document.querySelector("#btn-white");
const btn_blue = document.querySelector("#btn-blue");
const btn_grey = document.querySelector("#btn-grey");
const btn_silver = document.querySelector("#btn-silver");
const btn_black = document.querySelector("#btn-black");
const btn_red = document.querySelector("#btn-red");
const white_hover = document.querySelector("#white-hover");
const blue_hover = document.querySelector("#blue-hover");
const grey_hover = document.querySelector("#grey-hover");
const silver_hover = document.querySelector("#silver-hover");
const black_hover = document.querySelector("#black-hover");
const red_hover = document.querySelector("#red-hover");
let selectedBtn = null; // guarda o ID do botão clicado
const carImg = document.querySelector("#colors img");
const colorName = document.querySelector("#colors h3");

function changeBtnHoverColor(btn_id) {
  switch (btn_id) {
    case "btn-white":
      white_hover.style.backgroundColor = "#bbb";
      return;
    case "btn-blue":
      blue_hover.style.backgroundColor = "#bbb";
      return;
    case "btn-grey":
      grey_hover.style.backgroundColor = "#bbb";
      return;
    case "btn-silver":
      silver_hover.style.backgroundColor = "#bbb";
      return;
    case "btn-black":
      black_hover.style.backgroundColor = "#bbb";
      return;
    case "btn-red":
      red_hover.style.backgroundColor = "#bbb";
      return;
  }
}
function changeBtnHoverColorStatic(btn_id) {
  switch (btn_id) {
    case "btn-white":
      white_hover.style.backgroundColor = "#000";
      return;
    case "btn-blue":
      blue_hover.style.backgroundColor = "#0a4852";
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
function emptyBtnHoverColor(btn_id) {
  switch (btn_id) {
    case "btn-white":
      white_hover.style.backgroundColor = "";
      return;
    case "btn-blue":
      blue_hover.style.backgroundColor = "";
      return;
    case "btn-grey":
      grey_hover.style.backgroundColor = "";
      return;
    case "btn-silver":
      silver_hover.style.backgroundColor = "";
      return;
    case "btn-black":
      black_hover.style.backgroundColor = "";
      return;
    case "btn-red":
      red_hover.style.backgroundColor = "";
      return;
  }
}
function changeCarImg(btn_id) {
  switch (btn_id) {
    case "btn-white":
      carImg.src = "img/chevrolet-onix-branco-summit-3-4-frente.avif";
      carImg.alt = "branco summit";
      colorName.textContent = "BRANCO SUMMIT";
      return;
    case "btn-blue":
      carImg.src = "img/chevrolet-onix-azul-seeker-3-4-frente.avif";
      carImg.alt = "azul seeker";
      colorName.textContent = "AZUL SEEKER";
      return;
    case "btn-grey":
      carImg.src = "img/chevrolet-onix-prata-shark-3-4-frente.avif";
      carImg.alt = "prata shark";
      colorName.textContent = "PRATA SHARK";
      return;
    case "btn-silver":
      carImg.src = "img/chevrolet-onix-cinza-drake-3-4-frente.avif";
      carImg.alt = "cinza drake";
      colorName.textContent = "CINZA DRAKE";
      return;
    case "btn-black":
      carImg.src = "img/chevrolet-onix-preto-ouro-negro-3-4-frente.avif";
      carImg.alt = "preto ouro negro";
      colorName.textContent = "PRETO OURO NEGRO";
      return;
    case "btn-red":
      carImg.src = "img/chevrolet-onix-vermelho-carmim-3-4-frente.avif";
      carImg.alt = "vermelho carmim";
      colorName.textContent = "VERMELHO CARMIM";
      return;
  }
}

// Seleciona o botão branco como ativo no carregamento da página
window.addEventListener("DOMContentLoaded", () => {
  selectedBtn = "btn-white";
  changeBtnHoverColorStatic(selectedBtn);
});

btn.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    if (btn.id !== selectedBtn) {
      changeBtnHoverColor(btn.id);
    }
  });
  btn.addEventListener("mouseleave", () => {
    if (btn.id !== selectedBtn) {
      emptyBtnHoverColor(btn.id);
    }
  });
  btn.addEventListener("click", () => {
    if (btn.id !== selectedBtn) {
      changeCarImg(btn.id);
      emptyBtnHoverColor(selectedBtn);
      selectedBtn = btn.id;
      changeBtnHoverColorStatic(btn.id);
    }
  });
});
