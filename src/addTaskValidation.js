import {resetButton, getDate, getTitle} from "./informationForm.js";

export default function validateForm() {
    if (getTitle.value === "" || getDate.value === "") {
        resetButton.click();
        return false;
    }
    else {
        return true;
    }
}