class Todo {
  constructor(title, description, dueDate, priority, notes = "", checklist = []) {
    this.title = title,           
    this.description = description,
    this.dueDate = dueDate,       
    this.priority = priority,     
    this.notes = notes,           // Optional notes about the task
    this.checklist = checklist,   // Optional checklist (array of sub-tasks)
    this.completed = false       
  }

  changeCompleted(){
    this.completed = !this.completed
  }
}

class Projects {
  constructor (name){
    this.name = name,
    this.todos = []
  }

  addTodo(todo){
    this.todos.push(todo)
  }

  removeTodo(title){
    this.todos = this.todos.filter(todo => todo.title !== title)
  }
}
