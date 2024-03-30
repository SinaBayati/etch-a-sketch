function renderTable(dimension){
  let container = document.createElement("div");
  container.className = "container";
  
  for(let i = 0; i < dimension; i++){
    let rowElem = document.createElement("div");
    rowElem.className = "row";
    for(let j = 0; j < dimension; j++){
      let divElem = document.createElement("div");
      divElem.className = "cell";
      rowElem.appendChild(divElem);
    }
    container.appendChild(rowElem);  
  }

  document.body.appendChild(container);
}

function addListeners(){
  let container = document.querySelector(".container");

  container.addEventListener("mouseover",(e) => {
    let target = e.target;
    if(
      !target.classList.contains("container")
      && e.ctrlKey
    ){
      target.classList.add("active");
    }
  });
}

function getUserInput(){
  let userInput = null;
  while(true){
    userInput = 
      +prompt("Enter the dimensions of the new Table (max=100)");
    if(
      !isNaN(userInput) 
      && Number.isInteger(userInput)
      && userInput <= 100
    ){
      break;
    } else {
      alert("Invalid input. Input must be an integer number between 1 and 100");
    }
  }
  return userInput;
}

function changeDimension(){
  const oldContainer = document.querySelector(".container");
  document.body.removeChild(oldContainer);

  const newDimension = getUserInput();
  renderTable(newDimension);
  addListeners();
}

const dimension = 16;
renderTable(dimension);
addListeners();

const changeBtn = document.querySelector("#change");
changeBtn.addEventListener("click",changeDimension);