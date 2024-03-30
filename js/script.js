const dimension = 16;

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

renderTable(dimension);

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

addListeners();