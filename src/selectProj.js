import { defaultProj, projTwo, projThree, projFour, projFive, projSix } from "./projectSidebar";

export default function selectProject() {
    let selectionNum = 0;

    defaultProj.addEventListener("click", () => {
        selectionNum = 1;
        console.log(`Project selected: ${selectionNum}`)
        return selectionNum;
    });

    projTwo.addEventListener("click", () => {
        selectionNum = 2;
        console.log(`Project selected: ${selectionNum}`)
        return selectionNum;
    });

    projThree.addEventListener("click", () => {
        selectionNum = 3;
        console.log(`Project selected: ${selectionNum}`)
        return selectionNum;
    })

    projFour.addEventListener("click", () => {
        selectionNum = 4;
        console.log(`Project selected: ${selectionNum}`)
        return selectionNum;
    })

    projFive.addEventListener("click", () => {
        selectionNum = 5;
        console.log(`Project selected: ${selectionNum}`)
        return selectionNum;
    })

    projSix.addEventListener("click", () => {
        selectionNum = 6;
        console.log(`Project selected: ${selectionNum}`)
        return selectionNum;
    })
}