let paragraph = document.createElement("p");
myElement.appendChild(paragraph);

const createTodo = (text) => {
    todos.push(text)
}

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()


    if (text.length > 0) {
        createTodo(text)
        e.target.elements.text.value = ''
    }

    console.log(todos)
})