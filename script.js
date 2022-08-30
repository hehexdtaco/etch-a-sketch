const container = document.querySelector("#container");

function gridCreation (rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-columns', columns);
  for (i = 0; i < (rows * columns); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black"
    })
  };
};

gridCreation(2,10)


//https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript 
// with help from stack overflow