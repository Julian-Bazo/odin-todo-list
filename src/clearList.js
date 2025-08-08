const wholeList = document.querySelector(".list");
import { listArray } from "./listCreator";
import updateHeader from "./updateHeader";

const headerArray = ["Starter", "New List", "Empty", "Empty", "Empty", "Empty"];

export default function clearList() {
    while (wholeList.firstChild){
    wholeList.removeChild(wholeList.lastChild);
    }

    updateHeader();
    
}

export {headerArray};