import {resetButton, submitButton, getUrgency, getDescription, getDate, getTitle} from "./informationForm.js";
import Task from "./taskcreator.js";
import validateForm from "./addTaskValidation.js";
import projectSelector from "./selectProject.js";
import { currentArray } from "./index.js";
import clearList from "./clearList.js";
import { wholeSidebar, projectsSection, defaultProj, newProj } from "./projectSidebar.js";

export default function addTask() {

    console.log(currentArray);
    console.log(projectSelector(currentArray));
    let selectedArray = projectSelector(currentArray);
    const wholeList = document.querySelector(".list");
    let titleAnswer = getTitle.value;
    let dateAnswer = getDate.value;
    let descriptionAnswer = getDescription.value;
    let urgentAnswer = getUrgency.checked;
    
    if (validateForm() === false) {
        alert("Please fill out the required fields!");
    }
    else {
        const task = new Task(titleAnswer, dateAnswer);
        task.setDescription(descriptionAnswer);
        task.setPriority(urgentAnswer);

        selectedArray.push(task);

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


        listCard.addEventListener("click",() => {
            selectedArray.splice(task.ID, 1);
            wholeList.removeChild(listCard);
        })

        resetButton.click();
        
        return wholeList;
    }  
    console.log(selectedArray);
}