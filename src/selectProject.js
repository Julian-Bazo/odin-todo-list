import { listArray, listArray2, listArray3, listArray4, listArray5, listArray6 } from "./listCreator";
import defaultListCreation from "./defaultList.js";
import displayList from "./displayList.js";

export default function projectSelector(arrayNum) {
    
    let currentArray = arrayNum;

    if (arrayNum === 2) {
        currentArray = listArray2;
    }

    else if (arrayNum === 3) {
        currentArray = listArray3;
    }

    else if (arrayNum === 4) {
        currentArray = listArray4;
    }

    else if (arrayNum === 5) {
        currentArray = listArray5;
    }

    else if (arrayNum === 6) {
        currentArray = listArray6;
    }

    else if (arrayNum === 1) {
        currentArray = listArray;
        defaultListCreation();
        displayList(currentArray);
    }
}