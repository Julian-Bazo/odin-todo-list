import "./styles.css";

import Task from "./taskcreator.js";
import taskInformation from "./informationForm.js";

console.log("Testing");

const firstTask = new Task("Go to the mall", "Tomorrow");
firstTask.setDescription("I have to buy eggs");
firstTask.setPriority("Urgent");
console.log(firstTask);

taskInformation();