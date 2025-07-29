import "./styles.css";

import Task from "./taskcreator.js";
import createForm from "./informationForm.js";

createForm();

console.log("Testing");

const firstTask = new Task("Go to the mall", "Tomorrow");
firstTask.setDescription("I have to buy eggs");
firstTask.setPriority("Urgent");
console.log(firstTask);


const submitButton = document.querySelector(".submit-button");
const titleValue = document.querySelector("#title");
const dateValue = document.querySelector("#date");
const descriptionValue = document.querySelector("#description");
const urgentValue = document.querySelector("#urgent");
const resetButton = document.querySelector(".reset-button");

submitButton.addEventListener("click", () => {
    event.preventDefault();
    let titleAnswer = titleValue.value;
    let dateAnswer = dateValue.value;
    let descriptionAnswer = descriptionValue.value;
    let urgentAnswer = urgentValue.checked;

    const task = new Task(titleAnswer, dateAnswer);
    task.setDescription(descriptionAnswer);
    task.setPriority(urgentAnswer);

    console.log(task);
    resetButton.click();
    
});



// Add clear button
// Submit button simulates click on clear button