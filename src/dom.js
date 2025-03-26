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
            // renderTodos
            renderProjects();
        });
        
        projectContainer.appendChild(projectItem);
    });
}