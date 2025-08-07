const wholeList = document.querySelector(".list");
import { defaultProj, projTwo, projThree, projFour, projFive, projSix } from "./projectSidebar";

export default function updateHeader() {
    const listHeader = document.createElement("div");
    listHeader.textContent = `List: `;
    listHeader.classList.add("list-header");
    wholeList.appendChild(listHeader);

    const editableHeader = document.createElement("span");
    editableHeader.textContent = `FIX`;
    editableHeader.classList.add(".editable-header");
    editableHeader.contentEditable = "true";
    listHeader.appendChild(editableHeader);

        editableHeader.addEventListener("input", () => {
        defaultProj.textContent = `FIX`;
        if (editableHeader.textContent === "") {
            defaultProj.textContent = "Add a title!";
        }
    })
}