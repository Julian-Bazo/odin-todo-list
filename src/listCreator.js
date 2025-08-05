import Task from "./taskcreator.js";
import { defaultProj } from "./projectSidebar.js";
export default function createList() {

    const wholeList = document.querySelector(".list");

    const listHeader = document.createElement("div");
    listHeader.textContent = `List: ${defaultProj.textContent}`;
    listHeader.classList.add("list-header");
    wholeList.appendChild(listHeader);

    const sampleTask = new Task("Grab eggs", "04/23");
    sampleTask.setDescription("Make sure to grab organic eggs.")
    listArray.push(sampleTask);

    const sampleTask2 = new Task("Grab milk", "04/23");
    sampleTask2.setDescription("Make sure NOT to grab organic milk!");
    listArray.push(sampleTask2);

    const sampleTask3 = new Task("Grab fish", "04/23");
    sampleTask3.setDescription("Always snapper.")
    listArray.push(sampleTask3);

    console.log(listArray);

    const mappedList = listArray.map((task) => {
        const listCard = document.createElement("div");
        listCard.innerText = `${task.title} by ${task.dueDate} | "${task.description}"`;
        listCard.classList.add("list-card");
        wholeList.appendChild(listCard);
        listCard.addEventListener("click",() => {
            listArray.splice(task.ID, 1);
            wholeList.removeChild(listCard);
        })
    })
}
    const listArray = [];

    export {listArray};