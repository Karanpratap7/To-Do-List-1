const input = document.getElementById("userInput");
const inputList = document.getElementById("inputList");


function addTask(){
  if(input.value === ''){
    alert("You must write something!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    inputList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
} 

inputList.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

input.addEventListener('keydown', function(event) {
  if (event.code == 'Enter') {
      addTask();
  }
});

function saveData(){
  localStorage.setItem("data",inputList.innerHTML);
}

function showTask(){
  inputList.innerHTML = localStorage.getItem("data");
}

showTask();
