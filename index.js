const container = document.getElementById("container");
const colorPicker = document.getElementById("colorPicker");
const randomPaint = document.getElementById("random-color");
const clear = document.getElementById("clear");
const backgroundPicker = document.getElementById("backgroundPicker");
const eraser = document.getElementById("eraser");

container.style.display = "flex";
container.style.width = "450px";
container.style.height = "450px";

function showValue() {
  container.innerHTML = "";
  let gridSize = document.getElementById("gridSize");
  if (gridSize.value > 100) {
    alert("Please choose a value below 100");
    gridSize.textContent = "";
    return;
  } else {
    createRows(gridSize.value, gridSize.value);
  }
}

createRows(16, 16);
setPixelColor();

function createRows(rowCount, colCount) {
  elementCounter = 0;
  let width =  ((450 - rowCount) / rowCount - 0.5)  + "px";
  let height =  ((450 - colCount) / colCount - 0.5)   + "px";
  for (rowCounter = 0; rowCounter < rowCount; rowCounter++) {
    const cols = document.createElement("div");
    for (colCounter = 0; colCounter < colCount; colCounter++) {
      const col = document.createElement("div");
      col.classList.add("row-" + elementCounter);
      col.style.width =  width;
      col.style.height = height;
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
  var color = "#";
  var random;
  for (i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

colorPicker.addEventListener("click", setPixelColor);

function setPixelColor() {
  alert;
  const selector = document.querySelectorAll('div[class^="row-"]');
  selector.forEach((pixel) => {
    let color;
    pixel.addEventListener("click", () => {
      color = getColorCode();
      pixel.style.backgroundColor = getColorCode();
    });
    pixel.addEventListener("dblclick", () => {
      pixel.style.backgroundColor = "#fff";
    });
    pixel.addEventListener("mouseover", () => {
      color = String(getRandomColor());
      pixel.style.backgroundColor = getRandomColor();
      })
    });
  }

randomPaint.addEventListener("click", () => {
  randomPaint.style.backgroundColor = String(getRandomColor());
  randomPaint.style.boxShadow = "0px 0px 12px 2px" + String(getRandomColor());
  const selector = document.querySelectorAll('div[class^="row-"]');
  selector.forEach((pixel) => {
    pixel.addEventListener("mouseenter", () => {
      pixel.style.backgroundColor = String(getRandomColor());
    });
  });
});

eraser.addEventListener("click", () => {
  const selector = document.querySelectorAll('div[class^="row"]');
  selector.forEach((pixel) => {
    pixel.addEventListener("mouseenter", () => {
      pixel.style.backgroundColor = "#fff";
    })
  });
});

randomPaint.addEventListener("dblclick", () => {
  const selector = document.querySelectorAll('div[class^="row-"]');
  selector.forEach((pixel) => {
    pixel.style.backgroundColor = "#fff";
  });
});

clear.addEventListener("click", () => {
  const selector = document.querySelectorAll('div[class^="row-"]');
  selector.forEach((pixel) => {
    pixel.style.backgroundColor = "";
  });

});

// eraser.addEventListener("mouseenter", () => {
//   const selector = document.querySelectorAll('div[class^="row-"]');
//   selector.forEach((pixel)=> {
//     pixel.style.backgroundColor = "";
//   }) 
// })

function setBackgroundColor() {
  // const selector = document.querySelectorAll('div[class^="row-"]');
  // selector.forEach((pixel) => {
  //   let pixelStyle = window.getComputedStyle(pixel)
  //   if(pixelStyle.backgroundColor === 'rgba(0, 0, 0, 0)') {
  //     let backgroundStyle = window.getComputedStyle(backgroundPicker);
  //     alert(backgroundStyle.backgroundColor);
  //     pixel.style.backgroundColor = backgroundStyle.backgroundColor;
  //   }
  // })
}

backgroundPicker.addEventListener("keydown", setBackgroundColor);
