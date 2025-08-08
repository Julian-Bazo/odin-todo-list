const wholeList = document.querySelector(".list");
import { defaultProj, projTwo, projThree, projFour, projFive, projSix } from "./projectSidebar";

export default function updateHeader() {
    const listHeader = document.createElement("div");
    listHeader.textContent = `List: `;
    listHeader.classList.add("list-header");
    wholeList.appendChild(listHeader);

    const placeholderText = "New List";
 
    const editableHeader = document.createElement("span");
    editableHeader.textContent = `${placeholderText}`
    editableHeader.classList.add("editable-header");
    editableHeader.contentEditable = "true";
    listHeader.appendChild(editableHeader);

    const maxLength = 30;

    editableHeader.addEventListener("focus", () => {
        if (editableHeader.textContent === placeholderText) {
            editableHeader.textContent = "";
        }
    })

    editableHeader.addEventListener("input", () => {
        defaultProj.textContent = `${editableHeader.textContent}`;
        if (editableHeader.textContent === "") {
            defaultProj.textContent = "Starter";
        }
    })
}