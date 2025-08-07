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

projThree.addEventListener("click", () => {
    currentArray = 3;
    clearList();
    createList(3);
})

projFour.addEventListener("click", () => {
    currentArray = 4;
    clearList();
    createList(4);
})

projFive.addEventListener("click", () => {
    currentArray = 5;
    clearList();
    createList(5);
})

projSix.addEventListener("click", () => {
    currentArray = 6;
    clearList();
    createList(6);
})

submitButton.addEventListener("click", addTask);



// TO DO
// Allow for projects to have name changes
// Add delete project function
// Array's can be cleared when deleted
// Utilize max length to prevent long titles
// If a project is deleted it's name will be reverted to "empty" until it's display is set to inline or whatever
// It's array is also completely emptied out

// CURRENT BUGS
// Array not removing properly
    // will have you use a looping slice to remove array items without having a setter
// Header title not updating when a new proj is selected
    // Move heading code to a custom module

// EXTRA
// Make it so item description is hidden if the window is minimized even 10%
// Add a proper date selector
