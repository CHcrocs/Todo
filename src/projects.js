// Project factory function
function createProject(name = 'Default') {
    return {
        name,
        todos: [],
        addTodo(todo) {
            this.todos.push(todo);
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        getTodos() {
            return this.todos;
        },
        setName(newName) {
            this.name = newName;
        }
    };
}

// Project manager to handle multiple projects
const projectManager = {
    projects: [],
    currentProject: null,

    init() {
        // Create default project if none exist
        if (this.projects.length === 0) {
            const defaultProject = createProject('Default');
            this.projects.push(defaultProject);
            this.currentProject = defaultProject;
        }
    },

    addProject(name) {
        const newProject = createProject(name);
        this.projects.push(newProject);
        return newProject;
    },

    setCurrentProject(name) {
        const found = this.projects.find(p => p.name === name);
        if (found) this.currentProject = found;
    },

    getCurrentProject() {
        return this.currentProject;
    },

    getProjects() {
        return this.projects;
    }
};

projectManager.init();

export { createProject, projectManager };