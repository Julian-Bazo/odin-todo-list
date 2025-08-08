const wholeList = document.querySelector(".list");
import { listArray } from "./listCreator";
import updateHeader from "./updateHeader";

const headerArray = [];

export default function clearList() {
    while (wholeList.firstChild){
    wholeList.removeChild(wholeList.lastChild);
    }
    
    updateHeader();
    
}