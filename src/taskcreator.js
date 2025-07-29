export default class Task {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }

    setDescription(description) {
        this.description = description;
    }

    setPriority(priority) {
        this.priority = priority;
    }
}