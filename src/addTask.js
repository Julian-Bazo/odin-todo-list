import {resetButton, submitButton, getUrgency, getDescription, getDate, getTitle} from "./informationForm.js";
import Task from "./taskcreator.js";
import { listArray } from "./listCreator.js";

export default function addTask() {

    const wholeList = document.querySelector(".list");
    let titleAnswer = getTitle.value;
    let dateAnswer = getDate.value;
    let descriptionAnswer = getDescription.value;
    let urgentAnswer = getUrgency.checked;

    const task = new Task(titleAnswer, dateAnswer);
    task.setDescription(descriptionAnswer);
    task.setPriority(urgentAnswer);

    listArray.push(task);

    const listCard = document.createElement("div");
    if (getDescription.value !== ""){
        listCard.innerText = `${task.title} by ${task.dueDate} | "${task.description}"`;
    }
    else {
        listCard.innerText = `${task.title} by ${task.dueDate} |`;
    }

    if (getUrgency.checked === true) {
        listCard.classList.add("urgent");
    }

    listCard.classList.add("list-card");
    wholeList.appendChild(listCard);

    console.log(listArray);
    resetButton.click();
    
}