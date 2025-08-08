import "./projectSidebar.js";
import projectSelector from "./selectProject.js";
import updateHeader from "./updateHeader.js";

export default function createList(arrayNum) {

    projectSelector(arrayNum);

    updateHeader();

}
    const listArray = [];
    const listArray2 = [];
    const listArray3 = [];
    const listArray4 = [];
    const listArray5 = [];
    const listArray6 = [];


    export {listArray, listArray2, listArray3, listArray4, listArray5, listArray6};