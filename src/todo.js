export class Todo {
  constructor(title, description, dueDate, priority, notes = "", checklist = []) {
    this.id = crypto.randomUUID(),
      this.title = title,
      this.dueDate = dueDate,
      this.description = description,
      this.priority = priority,
      this.notes = notes, // Optional notes about the task
      this.checklist = checklist, // Optional checklist (array of sub-tasks)
      this.completed = false
  }

  changeCompleted() {
    this.completed = !this.completed;
  }

  lowerPriority() {
    if (this.priority > 0) this.priority--;
  }

  increasePriority() {
    if (this.priority < 20) this.priority++;
  }
}
