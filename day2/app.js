let addBtn = document.getElementById('addBtn');
let inputField = document.getElementById('inputField');
let listContainer = document.getElementById('list');

addBtn.addEventListener('click', () => {
    if(inputField.value !== ''){
        let li = document.createElement('li')
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete'
        deleteBtn.addEventListener('click', () => {
            li.remove()
        })
        li.textContent = inputField.value;
        listContainer.append(li);
        li.append(deleteBtn)
        inputField.value = ''
    }else alert('input field is empty.')
})
