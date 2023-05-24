const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')
const createTodo = () => {
    if(!input.value.trim()){       input.value = ''
        return false    }else{
        const div = document.createElement('div')
        div.setAttribute('class', 'block_text')
        const text = document.createElement('h3')
        text.innerHTML = input.value
        const divButton = document.createElement('div')
        divButton.setAttribute('class', 'div_button')
        const deleteButton = document.createElement('button')
        deleteButton.setAttribute('class', 'delete_button')
        deleteButton.innerHTML = 'delete'
        const editButton = document.createElement('button')
        editButton.setAttribute('class', 'edit_button')
        editButton.innerHTML = 'edit'
        divButton.append(deleteButton, editButton)
        div.append(text, divButton)
        todoList.prepend(div)
        input.value = '';
        editButton.addEventListener('click', () => {
            const newText = prompt('edit', text.innerText).trim();
            newText === '' ? text.innerHTML : text.innerHTML = newText
        });
        deleteButton.addEventListener('click', () => {
            div.remove();
        });    }
};
createButton.onclick = () => createTodo()