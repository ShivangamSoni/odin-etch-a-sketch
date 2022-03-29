import Grid from "./modules/Grid.js";

// Elements
const pixelPad = document.querySelector("#pixelPad");
const sizeSlider = document.querySelector("#sizeSlider");
const colorRadioGroup = document.querySelectorAll("input[name='color']");
const gridLineSelector = document.querySelector("#gridLineSelector");
const clearBtn = document.querySelector("#clear");

// Creating Grid
const grid = new Grid(pixelPad, 8);

// Changing Size
sizeSlider.addEventListener("change", (e) => {
  const slider = e.target;
  const value = slider.value;
  slider.previousElementSibling.textContent = `Size: ${value} X ${value}`;
  grid.setSize(parseInt(value));
});

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

// Clearing the Grid
clearBtn.addEventListener("click", grid.clear);
