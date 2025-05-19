class Todo {
    constructor(title, description, completed = false, dueDate = null, priority = null) {
        if (!Todo.lastId) {
            Todo.lastId = 1;
        } else {
            Todo.lastId++;
        }
        this.id = Todo.lastId;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    toggle() {
        this.completed = !this.completed;
    }
}

export default Todo;