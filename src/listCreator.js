import "./projectSidebar.js";
import { defaultProj } from "./projectSidebar.js";
import projectSelector from "./selectProject.js";

export default function createList(arrayNum) {

    projectSelector(arrayNum);

    const wholeList = document.querySelector(".list");

    const listHeader = document.createElement("div");
    listHeader.textContent = `List: `;
    listHeader.classList.add("list-header");
    wholeList.appendChild(listHeader);

    const editableHeader = document.createElement("span");
    editableHeader.textContent = "Starter";
    editableHeader.classList.add(".editable-header");
    editableHeader.contentEditable = "true";
    listHeader.appendChild(editableHeader);

    // const maxLength = 30; GOTTA DO THIS PART LATER

    editableHeader.addEventListener("input", () => {
        defaultProj.textContent = `${editableHeader.textContent}`;
        if (editableHeader.textContent === "") {
            defaultProj.textContent = "Starter";
        }
    })

}
    const listArray = [];
    const listArray2 = [];
    const listArray3 = [];
    const listArray4 = [];
    const listArray5 = [];
    const listArray6 = [];


    export {listArray, listArray2, listArray3, listArray4, listArray5, listArray6};