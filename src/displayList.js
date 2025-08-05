
const wholeList = document.querySelector(".list");

export default function displayList(listName) {
    const mappedList = listName.map((task) => {
        const listCard = document.createElement("div");
        listCard.innerText = `${task.title} by ${task.dueDate} | "${task.description}"`;
        listCard.classList.add("list-card");
        wholeList.appendChild(listCard);
        listCard.addEventListener("click",() => {
            listName.splice(task.ID, 1);
            wholeList.removeChild(listCard);
        })
    })
}