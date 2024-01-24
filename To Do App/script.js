let addTask = document.getElementById("add-task");
let taskList = document.getElementById("today-task-list");
let taskinp = document.getElementById("taskInput");

function todoForToday() {
  if (taskinp.value === "") {
    alert("Add a task!");
  } else {
    let li = document.createElement("li");
    let liImg = document.createElement("img");
    liImg.src = "./deleteIcon.png";
    li.innerHTML = taskinp.value;
    taskList.appendChild(li);
    li.appendChild(liImg);
  }
  taskinp.value = "";
  // function taskCompleted(){
  //   let cut=li.querySelector("img");
  //   cut.style.textDecoration = "line-through";
  //   }
}
// ****EVENT FOR REMOVING THE LIST ITEM****
taskList.addEventListener("click", function(e){
  if(e.target.tagName==='IMG'){
    e.target.parentElement.remove();
      }
});
