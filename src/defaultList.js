import { listArray } from "./listCreator";
import Task from "./taskcreator";

export default function defaultListCreation() {

if (listArray.length === 0) {

const sampleTask = new Task("Grab eggs", "04/23");
sampleTask.setDescription("Make sure to grab organic eggs.")
listArray.push(sampleTask);

const sampleTask2 = new Task("Grab milk", "04/23");
sampleTask2.setDescription("Make sure NOT to grab organic milk!");
listArray.push(sampleTask2);

const sampleTask3 = new Task("Grab fish", "04/23");
sampleTask3.setDescription("Always snapper.")
listArray.push(sampleTask3);
}
}