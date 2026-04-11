let inputField = document.getElementById("inputField");
let addBtn = document.getElementById("addBtn");
let listContainer = document.getElementById("list");
let emptyMsg = document.getElementById('emptyMsg')

addBtn.addEventListener("click", () => {
    
  if (inputField.value !== "" && inputField.value.trim() !== '') {
    let li = document.createElement("li");
    let spanText = document.createElement("span");
    spanText.textContent = inputField.value
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'delete'
    let taskChecker = document.createElement('input');
    taskChecker.type = 'checkbox';

    emptyMsg.hidden = true

    listContainer.append(li);
    li.append(taskChecker)
    li.append(spanText)
    li.append(deleteBtn)
    inputField.value = ''
   taskChecker.addEventListener('change', () => {
    if(taskChecker.checked){
        spanText.style.textDecoration = 'line-through'
    }else{
        spanText.style.textDecoration = 'none'
    }
   })

   deleteBtn.addEventListener('click' , () => {
    li.remove()
   })

  }else {
    emptyMsg.style.color = 'red'
    emptyMsg.hidden = false
  }
});
