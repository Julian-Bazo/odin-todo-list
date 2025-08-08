const wholeList = document.querySelector(".list");
export {wholeList};
import { defaultProj, projTwo, projThree, projFour, projFive, projSix } from "./projectSidebar";
import { headerArray } from "./clearList";
import { currentArray } from ".";
import selectPlaceHolder from "./selectPlaceholder";

export default function updateHeader() {
    const listHeader = document.createElement("div");
    listHeader.textContent = `List: `;
    listHeader.classList.add("list-header");
    wholeList.appendChild(listHeader);
 
    const editableHeader = document.createElement("span");
    editableHeader.textContent = `${selectPlaceHolder(currentArray)}`
    editableHeader.classList.add("editable-header");
    editableHeader.contentEditable = "true";
    listHeader.appendChild(editableHeader);

    // const maxLength = 30; COME BACK AND FIX THIS Add ellipses after a certain character count

    editableHeader.addEventListener("focus", () => {
        if (editableHeader.textContent === `${selectPlaceHolder(currentArray)}`) {
            editableHeader.textContent = "";
        }
    })

    editableHeader.addEventListener("input", () => {
        if (currentArray === 1) {
            defaultProj.textContent = `${editableHeader.textContent}`;
        }
        else if (currentArray === 2) {
            projTwo.textContent = `${editableHeader.textContent}`;
            projTwo.classList.remove("add-proj");
            projTwo.classList.add("clickable-proj");
        }
        else if (currentArray === 3) {
            projThree.textContent = `${editableHeader.textContent}`;
            projThree.classList.remove("add-proj");
            projThree.classList.add("clickable-proj");
        }
        else if (currentArray === 4) {
            projFour.textContent = `${editableHeader.textContent}`;
            projFour.classList.remove("add-proj");
            projFour.classList.add("clickable-proj");
        }
        else if (currentArray === 5) {
            projFive.textContent = `${editableHeader.textContent}`;
            projFive.classList.remove("add-proj");
            projFive.classList.add("clickable-proj");
        }
        else if (currentArray === 6) {
            projSix.textContent = `${editableHeader.textContent}`;
            projSix.classList.remove("add-proj");
            projSix.classList.add("clickable-proj");
        }
        
        if (editableHeader.textContent === "" && currentArray === 1) {
            defaultProj.textContent = "New List";
        }
        if (editableHeader.textContent === "" && currentArray === 2) {
            projTwo.textContent = "New List";
        }
        if (editableHeader.textContent === "" && currentArray === 3) {
            projThree.textContent = "New List";
        }
        if (editableHeader.textContent === "" && currentArray === 4) {
            projFour.textContent = "New List";
        }
        if (editableHeader.textContent === "" && currentArray === 5) {
            projFive.textContent = "New List";
        }
        if (editableHeader.textContent === "" && currentArray === 6) {
            projSix.textContent = "New List";
        }
        headerArray[currentArray - 1] = editableHeader.textContent;
        console.log(headerArray);
    })
}