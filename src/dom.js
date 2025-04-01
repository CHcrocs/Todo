import { Todo } from "./todo";
import { Projects } from "./project";

const projectContainer = document.getElementById("project_list");
const todoListContainer = document.getElementById("todo_list");
const todoForm = document.getElementById("todo_form");

let projects = [];
let currentProject = null;

function createDefaultProject() {
    const defaultProject = new Project("My project");
    projects.push(defaultProject);
    currentProject = defaultProject;
    renderProjects();
}

export function renderProjects() {
    projectContainer.innerHTML = "";
    projects.forEach((project) => {
        const projectItem = document.createElement("button");
        projectItem.textContent = project.name;
        projectItem.classList.add("project_item");
        if (project === currentProject) {
            projectItem.classList.add("active");
        }

        projectItem.addEventListener("click", () => {
            currentProject = project;
            renderTodos();
            renderProjects();
        });

        projectContainer.appendChild(projectItem);
    });
}

export function renderTodos() {
    todoListContainer.innerHTML = "";

    if (!currentProject) return;

    currentProject.todos.forEach((todo) => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo_item");
        todoItem.style.borderLeft = `5px solid ${getPriorityColor(todo.priority)}`;

        todoItem.innerHTML = `
            <h3>${todo.title}</h3>
            <p><strong>Data:</strong> ${todo.dueDate}</p>
            <button class="expand_btn" data_id="${todo.id}">✏️</button>
            <button class="delete_btn" data_id="${todo.id}">🗑️</button>
        `;

        todoItem.querySelector(".expand_btn").addEventListener("click", () => {
            editTodo(todo);
        });

        todoItem.querySelector(".delete_btn").addEventListener("click", () => {
            currentProject.removeTodo(todo.id);
            renderTodos();
        });

        todoListContainer.appendChild(todoItem);
    });
}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!currentProject) return;

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due_date").value;
    const priority = parseInt(document.getElementById("priority").value);

    if (title && dueDate) {
        const newTodo = new Todo(title, description, dueDate, priority);
        currentProject.addTodo(newTodo);
        renderTodos();
        todoForm.reset();
    }
});

function editTodo(todo) {
    const newTitle = prompt("Edit title: ", todo.title);
    const newDescription = prompt("Edit description: ", todo.description);
    const newDueDate = prompt("Edit Due Date (AAAA-MM-DD): ", todo.dueDate);
    const newPriority = prompt("Edit priority:", todo.priority);

    if (newTitle) todo.title = newTitle;
    if (newDescription) todo.description = newDescription;
    if (newDueDate) todo.dueDate = newDueDate;
    if (newPriority) todo.priority = parseInt(newPriority);

    renderTodos();
}

function getPriorityColor(priority) {
    if (priority > 10) return "red";
    if (priority > 5) return "orange";
    return "green";
}

createDefaultProject();