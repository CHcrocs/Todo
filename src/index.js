import "./styles.css";
import { renderProjects, renderTodos } from "./dom.js";

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    renderTodos();
});