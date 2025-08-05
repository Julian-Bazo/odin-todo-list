import "./styles.css";

// import Task from "./taskcreator.js";
import {resetButton, submitButton, getUrgency, getDescription, getDate, getTitle} from "./informationForm.js";
import { projectsSection } from "./projectSidebar.js";
import initializeList from "./listCreator.js";
import addTask from "./addTask.js";
import createProject from "./newProj.js";
import updateHeader from "./updateHeader.js";
import projectSelector from "./selectProj.js";

projectSelector();

initializeList();

submitButton.addEventListener("click", addTask);

// TO DO
// Add project functionality -- new array created, old is not deleted
// Figure out why editableHeader isn`t able to be selected
// Allow for projects to have name changes
// Utilize max length to prevent long titles
// Create function that checks which project was clicked
// On initialization include the max of 6-8 projects with only the started and new one shown, all others display: none
// Each project will have its own data array that will be saved
// If a project is deleted it's name will be reverted to "empty" until it's display is set to inline or whatever
// It's array is also completely emptied out

// EXTRA
// Make it so item description is hidden if the window is minimized even 10%
// Add a proper date selector
