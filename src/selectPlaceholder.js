import { defaultProj, projTwo, projThree, projFour, projFive, projSix } from "./projectSidebar";

let currentTitle = "Welcome"; 

export default function selectPlaceHolder(num) {

    if (num === 1) {
        currentTitle = `${defaultProj.textContent}`;
    }
    if (num === 2) {
        currentTitle = `${projTwo.textContent}`;
    }
    if (num === 3) {
        currentTitle = `${projThree.textContent}`;
    }
    if (num === 4) {
        currentTitle = `${projFour.textContent}`;
    }
    if (num === 5) {
        currentTitle = `${projFive.textContent}`;
    }
    if (num === 6) {
        currentTitle = `${projSix.textContent}`;
    }
    return currentTitle;
}