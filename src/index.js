import "./styles.css";

import {resetButton, submitButton, getUrgency, getDescription, getDate, getTitle} from "./informationForm.js";
import createList, { listArray2 } from "./listCreator.js";
import addTask from "./addTask.js";
import clearList from "./clearList.js";
import { defaultProj, projTwo, projThree, projFour, projFive, projSix } from "./projectSidebar";

export let currentArray = 1;
createList(1);

defaultProj.addEventListener("click", () => {
    currentArray = 1
    clearList();
    createList(1);
})

projTwo.addEventListener("click", () => {
    console.log(listArray2);
    currentArray = 2;
    clearList();
    createList(2);
});

submitButton.addEventListener("click", addTask);



// TO DO
// Add project functionality -- new array created, old is not deleted
// Figure out why editableHeader isn`t able to be selected
// Allow for projects to have name changes
// Added tasks get added to selected array
// Array's can be cleared when deleted
// Utilize max length to prevent long titles
// Each project will have its own data array that will be saved
// If a project is deleted it's name will be reverted to "empty" until it's display is set to inline or whatever
// It's array is also completely emptied out

// CURRENT BUGS
// Array not updating/removing properly
    // will have you use a looping slice to remove array items without having a setter
// Header title not updating when a new proj is selected
    // Move heading code to a custom module

// EXTRA
// Make it so item description is hidden if the window is minimized even 10%
// Add a proper date selector
