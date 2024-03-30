const dimension = 16;

function renderTable(dimension){
  let container = document.createElement("div");
  container.className = "container";
  
  for(let i = 0; i < dimension; i++){
    let divElem = document.createElement("div");
    divElem.className = "cell";
    container.appendChild(divElem);  
  }

  document.body.appendChild(container);
}

renderTable(dimension);