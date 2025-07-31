import "./styles.css";

import Task from "./taskcreator.js";
import {resetButton, submitButton, getUrgency, getDescription, getDate, getTitle} from "./informationForm.js";
import { projectsSection } from "./projectSidebar.js";
import initializeList from "./listCreator.js";
// import { listArray } from "./listCreator.js";
import addTask from "./addTask.js";

initializeList();

const firstTask = new Task("Go to the mall", "Tomorrow");
firstTask.setDescription("I have to buy eggs");
firstTask.setPriority("Urgent");
console.log(firstTask);

submitButton.addEventListener("click", addTask);
