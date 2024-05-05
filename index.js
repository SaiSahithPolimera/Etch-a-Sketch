const container = document.getElementById("container");
const colorPicker = document.getElementById("color");

container.style.display = "flex";

function showValue() {
  container.innerHTML = "";
  let gridSize = document.getElementById("gridSize");
  if (gridSize.value > 25) {
    alert("Please choose a value below 25");
    gridSize.textContent = "";
    return;
  } else {
    createRows(gridSize.value, gridSize.value);
    setPixelColor();
  }
}

createRows(16, 16);
setPixelColor();

function createRows(rowCount, colCount) {
  elementCounter = 0;
  for (rowCounter = 0; rowCounter < rowCount; rowCounter++) {
    const cols = document.createElement("div");
    for (colCounter = 0; colCounter < colCount; colCounter++) {
      const col = document.createElement("div");
      col.classList.add("row-" + elementCounter);
      col.style.width = "20px";
      col.style.height = "20px";
      col.style.border = "1px solid black";
      cols.appendChild(col);
      elementCounter++;
    }
    container.append(cols);
  }
}

function getColorCode() {
  return colorPicker.value;
}

function getRandomColor() {
  var letter = "0123456789ABCDEF";
  var color = '#'
  for(i = 0; i< 16; i++)
  {
    color += letter(Math.floor(Math.random() % 16))
  }
  return color;
}

function setPixelColor() {
  alert;
  const selector = document.querySelectorAll('div[class^="row-"]');
  selector.forEach((pixel) => {
    pixel.addEventListener("click", () => {
      pixel.style.backgroundColor = getColorCode();
    });
    pixel.addEventListener("dblclick", () => {
      pixel.style.backgroundColor = "#fff";
    });
  });
}
