import "./styles.css";

// import Task from "./taskcreator.js";
import {resetButton, submitButton, getUrgency, getDescription, getDate, getTitle} from "./informationForm.js";
import { projectsSection } from "./projectSidebar.js";
import initializeList from "./listCreator.js";
import addTask from "./addTask.js";

initializeList();

submitButton.addEventListener("click", addTask);

// TO DO
// Add project functionality -- new array created, old is not deleted

// EXTRA
// Make it so item description is hidden if the window is minimized even 10%
// Add a proper date selector
