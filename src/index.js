import "./styles.css";

import Task from "./taskcreator.js";
import {resetButton, submitButton, getUrgency, getDescription, getDate, getTitle} from "./informationForm.js";
import { projectsSection } from "./projectSidebar.js";
import listCreator from "./listCreator.js";

listCreator();

const firstTask = new Task("Go to the mall", "Tomorrow");
firstTask.setDescription("I have to buy eggs");
firstTask.setPriority("Urgent");
console.log(firstTask);

submitButton.addEventListener("click", () => {
    event.preventDefault();
    let titleAnswer = getTitle.value;
    let dateAnswer = getDate.value;
    let descriptionAnswer = getDescription.value;
    let urgentAnswer = getUrgency.checked;

    const task = new Task(titleAnswer, dateAnswer);
    task.setDescription(descriptionAnswer);
    task.setPriority(urgentAnswer);

    console.log(task);
    resetButton.click();
    
});
