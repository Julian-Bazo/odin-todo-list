import Task from "./taskcreator.js";
export default function createList() {

    const wholeList = document.querySelector(".list");

    const sampleTask = new Task("Grab eggs", "04/23");
    listArray.push(sampleTask);

    const sampleTask2 = new Task("Grab milk", "04/23");
    listArray.push(sampleTask2);

    const sampleTask3 = new Task("Grab fish", "04/23");
    listArray.push(sampleTask3);

    const sampleTask4 = new Task("Grab meat", "04/23");
    listArray.push(sampleTask4);

    const sampleTask5 = new Task("Grab veggies", "04/23");
    listArray.push(sampleTask5);

    console.log(listArray);

    const mappedList = listArray.map((task) => {
        const listCard = document.createElement("div");
        listCard.innerText = `${task.title} by ${task.dueDate} |`;
        listCard.classList.add("list-card");
        wholeList.appendChild(listCard);
    })
}

    const listArray = [];

    export {listArray};