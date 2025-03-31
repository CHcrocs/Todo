import { Todo } from "./todo";
import { Project } from "./project";

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
    projects.forEach((project, index) => {
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

    if (!currentProject) 
        return;

    currentProject.todos.forEach(todo => {
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
            // Editar todo
        });

        todoItem.querySelector(".delete_btn").addEventListener("click", () => {
            currentProject.removeTodo(todo.id);
            renderTodos();
        });

        todoListContainer.appendChild(todoItem);
    })

}