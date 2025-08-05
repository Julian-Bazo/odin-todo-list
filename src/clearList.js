const wholeList = document.querySelector(".list");

export default function clearList() {
    while (wholeList.firstChild){
    wholeList.removeChild(wholeList.lastChild);
    }

    
}