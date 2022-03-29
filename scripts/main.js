import Grid from "./modules/Grid.js";

// Elements
const pixelPad = document.querySelector("#pixelPad");
const sizeSlider = document.querySelector("#sizeSlider");
const colorRadioGroup = document.querySelectorAll(".colorSelector");
const gridLineSelector = document.querySelector("#gridLineSelector");

// Creating Grid
const grid = new Grid(pixelPad, 8, 8);

// Changing Size
sizeSlider.addEventListener("change", (e) => grid.setSize(parseInt(e.target.value)));

// Changing Color
colorRadioGroup.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    const radio = e.target;
    if (radio.checked) {
      grid.setColor(Grid.colorOptions[radio.value]);
    }
  });
});

// Toggling Grid Lines
gridLineSelector.addEventListener("change", (e) => {
  grid.setGridLines(e.target.checked);
});
