class Grid {
  constructor(root, size) {
    this.root = root;
    this.size = size;
    this.activeColor = Grid.colorOptions.BLACK;
    this.gridLines = false;
    this.render();

    this.root.style.display = "grid";
    this.root.style.outline = "2px solid #fff";
  }

  static colorOptions = Object.freeze({
    BLACK: "#000",
    ERASE: "#FFF",
    RAINBOW: "RANDOM",
  });

  render() {
    document.querySelectorAll(".pixel").forEach((p) => {
      p.removeEventListener("mouseenter", this.paintPixel);
      p.removeEventListener("click", this.paintPixel);
      p.remove();
    });

    this.root.style.gridTemplateColumns = `repeat(${this.size}, minmax(0, 1fr))`;
    this.root.style.gridTemplateRows = `repeat(${this.size}, minmax(0, 1fr))`;

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        const pixel = document.createElement("span");
        pixel.classList.add("pixel");

        pixel.addEventListener("mouseenter", this.paintPixel);
        pixel.addEventListener("click", this.paintPixel);

        pixel.style.background = "#fff";
        if (this.gridLines) {
          pixel.style.outline = "1px solid #ccc";
        }

        this.root.appendChild(pixel);
      }
    }
  }

  paintPixel = (e) => {
    if (e.type === "click" || e.buttons === 1) {
      const pixel = e.target;

      if (this.activeColor === Grid.colorOptions.RAINBOW) {
        pixel.style.backgroundColor = Grid.getRandomColor();
      } else {
        pixel.style.backgroundColor = this.activeColor;
      }
    }
  };

  static getRandomColor() {
    const hex = [...Array(6)].map((i) => Math.floor(Math.random() * 16).toString(16)).join("");
    return `#${hex}`;
  }

  clear = () => {
    this.render();
  };

  setSize(size) {
    this.size = size;
    this.render();
  }

  setColor(activeColor) {
    this.activeColor = activeColor;
  }

  setGridLines(gridLines) {
    this.gridLines = gridLines;

    document.querySelectorAll(".pixel").forEach((pixel) => {
      if (gridLines) {
        pixel.style.outline = "1px solid #ccc";
      } else {
        pixel.style.outline = "none";
      }
    });
  }
}

export default Grid;
