import "./styles.css";

import {submitButton} from "./informationForm.js";
import createList from "./listCreator.js";
import addTask from "./addTask.js";
import clearList from "./clearList.js";
import { defaultProj, projTwo, projThree, projFour, projFive, projSix } from "./projectSidebar";
import updateHeader from "./updateHeader.js";
import defaultListCreation from "./defaultList.js";

let currentArray = 1;
defaultListCreation();
createList(1);
updateHeader();

defaultProj.addEventListener("click", () => {
    currentArray = 1
    clearList();
    createList(1);
})

projTwo.addEventListener("click", () => {
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
export {currentArray};



// DEVELOPER NOTES //

// TO DO
// Delete project function empty array and DOM items
// Cut-off sidebar title with "..." if too long

// CURRENT BUGS
// Array not removing properly
    // will have you use a looping slice to remove array items without having a setter

// EXTRA
// Make it so item description is hidden if the window is minimized even 10%
// Add a proper date selector
// Add local storage

// OVERALL NOTES
// If I could do it over again I would make the lists a class and tasks also the same as a class and have them interact
// as now I have to set a default number of lists without spending too much time fixing my poor code from the start.
// Although all of that was annoying, having to fix the problems of poor starting code has caused me to learn a very valuable lesson.
// And my natural trouble-shooting skills have gotten better as a result

// Conclusion
// Onward and upwards let's keep going
