import {resetButton, submitButton, getUrgency, getDescription, getDate, getTitle} from "./informationForm.js";
import Task from "./taskcreator.js";
import { listArray } from "./listCreator.js";

export default function addTask() {
    let titleAnswer = getTitle.value;
    let dateAnswer = getDate.value;
    let descriptionAnswer = getDescription.value;
    let urgentAnswer = getUrgency.checked;

    const task = new Task(titleAnswer, dateAnswer);
    task.setDescription(descriptionAnswer);
    task.setPriority(urgentAnswer);

    listArray.push(task);

    console.log(listArray);
    resetButton.click();
    
}