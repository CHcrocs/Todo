import "./styles.css";
import { renderProjects, renderTodos } from "./dom";

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    renderTodos();
});