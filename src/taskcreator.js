export default class Task {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
        this.ID = taskID;
        taskID++;
    }

    setDescription(description) {
        this.description = description;
    }

    setPriority(priority) {
        this.priority = priority;
    }
}

let taskID = 0;