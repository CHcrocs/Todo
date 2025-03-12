class Todo {
  constructor(title, description, dueDate, priority, notes = "", checklist = []) {
    this.title = title,           // Title of the task
    this.description = description, // Description of the task
    this.dueDate = dueDate,       // Due date for completion
    this.priority = priority,     // Priority level (High, Medium, Low)
    this.notes = notes,           // Optional notes about the task
    this.checklist = checklist,   // Optional checklist (array of sub-tasks)
    this.completed = false       // Status if the task is completed or not
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

