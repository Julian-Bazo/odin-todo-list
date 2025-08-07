import clearList from "./clearList";
import displayList from "./displayList";

export default function updateList(currentArray) {
    clearList();
    displayList(currentArray);
}