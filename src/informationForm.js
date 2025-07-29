    const contentContainer = document.querySelector(".content");
    
    const mainForm = document.createElement("form");
    mainForm.classList.add("whole-form");

    const formHeader = document.createElement("h1");
    formHeader.textContent = "Add List Item:"
    mainForm.appendChild(formHeader);

    // Create DIVs for questions
    const titleSection = document.createElement("div");
    titleSection.classList.add("title-section")
    mainForm.appendChild(titleSection);

    const dateSection = document.createElement("div");
    dateSection.classList.add("date-section");
    mainForm.appendChild(dateSection);

    const descriptionSection = document.createElement("div");
    descriptionSection.classList.add("description-section");
    mainForm.appendChild(descriptionSection);

    const urgencySection = document.createElement("div");
    urgencySection.classList.add("urgency-section");
    mainForm.appendChild(urgencySection);

    const buttonSection = document.createElement("div");
    buttonSection.classList.add("button-section");
    mainForm.appendChild(buttonSection);

    // Labels and inputs
    const getTitle = document.createElement("input");
    getTitle.name = "title";
    getTitle.id = "title";
    const titleLabel = document.createElement("label");
    titleLabel.for = "title";
    titleLabel.textContent = "*Task Name: ";
    getTitle.type = "text";
    getTitle.placeholder = "List Item";

    titleSection.appendChild(titleLabel);
    titleSection.appendChild(getTitle);

    const getDate = document.createElement("input");
    getDate.name = "date";
    getDate.id = "date";
    const dateLabel = document.createElement("label");
    dateLabel.for = "date";
    dateLabel.textContent = "*Date: ";
    getDate.type = "text";
    getDate.placeholder = "MM/DD";

    dateSection.appendChild(dateLabel);
    dateSection.appendChild(getDate);

    const getDescription = document.createElement("textarea");
    getDescription.name = "description";
    getDescription.id = "description";
    getDescription.rows = "5";
    getDescription.cols = "33";
    getDescription.placeholder = "Enter any additional info...";

    const descriptionLabel = document.createElement("label");
    descriptionLabel.for = "description";
    descriptionLabel.textContent = "Notes: "

    const getUrgency = document.createElement("input");
    getUrgency.type = "checkbox";
    getUrgency.name = "urgent";
    getUrgency.id = "urgent";
    getUrgency.value = "urgent";

    const urgencyLabel = document.createElement("label");
    urgencyLabel.for = "urgency";
    urgencyLabel.textContent = "Important?"

    urgencySection.appendChild(urgencyLabel);
    urgencySection.appendChild(getUrgency);

    descriptionSection.appendChild(descriptionLabel);
    descriptionSection.appendChild(getDescription);

    contentContainer.appendChild(mainForm);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Add Item";
    submitButton.classList.add("submit-button");
    buttonSection.appendChild(submitButton);

    const resetButton = document.createElement("button");
    resetButton.textContent = "Clear";
    resetButton.classList.add("reset-button");
    buttonSection.appendChild(resetButton);
    resetButton.type = "reset";

    export { resetButton, submitButton, urgencyLabel, getUrgency, descriptionLabel, getDescription, dateLabel, getDate, titleLabel, getTitle, buttonSection, urgencySection, dateSection, titleSection, descriptionSection, formHeader};