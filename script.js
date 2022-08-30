const container = document.querySelector("#container");


function gridCreation (rows, columns) {

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-columns', columns);
  container.style.width = "960px"
  for (i = 0; i < (rows * columns); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black"
      cell.style.minHeight = "0"
      cell.style.minWidth = "0"
    })
  };
  restartGrid()


  function restartGrid() {
    const buttonGrid = document.querySelector("#button-grid")
  
  buttonGrid.textContent = "Draw again"
  buttonGrid.style.margin = "30px"

  buttonGrid.addEventListener('click', () => {
    document.querySelectorAll(".grid-item").forEach(element => element.remove())
    let input = prompt("Enter a number that will dictate how many rows and columns are used to create grid. Maximum number is 100")
    if (input > 100) {
      alert("Please select a valid number")
      return
    }

    rows = input
    columns = input
    gridCreation(rows,columns)
  })
};



}

gridCreation(16,16)



//https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript 
// with help from stack overflow