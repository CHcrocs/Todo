export class Projects {
  constructor(name) {
    this.name = name, 
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    const removedTodo = this.todos.filter(todo => todo.id !== id);
    this.todos.pop(removedTodo);
  }
}
