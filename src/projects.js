const project = {
    name: '',
    todos: [],
    
    addTodo(todo) {
        this.todos.push(todo);
    },
    removeTodo(index) {
        this.todos.splice(index, 1);
    },
    getTodos() {
        return this.todos;
    },
    setName(name) {
        this.name = name;
    }
};

export default project;