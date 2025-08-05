const wholeSidebar = document.querySelector(".sidebar");
    
const usernameSection = document.createElement("div");
usernameSection.textContent = "User Name";
usernameSection.classList.add("username-section");
wholeSidebar.appendChild(usernameSection);

const projectsSection = document.createElement("div");
projectsSection.textContent = "Lists:";
projectsSection.classList.add("projects-section");
wholeSidebar.appendChild(projectsSection);

const defaultProj = document.createElement("div");
defaultProj.classList.add("clickable-proj");
defaultProj.classList.add("bold-hover");
defaultProj.textContent = "Starter"
wholeSidebar.appendChild(defaultProj);

const projTwo = document.createElement("div");
projTwo.textContent = "New List";
projTwo.classList.add("add-proj");
projTwo.classList.add("bold-hover")
wholeSidebar.appendChild(projTwo);

const projThree = document.createElement("div");
projThree.textContent = "empty";
projThree.classList.add("add-proj");
projThree.classList.add("invisible");
projThree.classList.add("bold-hover");
wholeSidebar.appendChild(projThree);

const projFour = document.createElement("div");
projFour.textContent = "empty";
projFour.classList.add("add-proj");
projFour.classList.add("invisible");
projFour.classList.add("bold-hover");
wholeSidebar.appendChild(projFour);

const projFive = document.createElement("div");
projFive.textContent = "empty";
projFive.classList.add("add-proj");
projFive.classList.add("invisible");
projFive.classList.add("bold-hover");
wholeSidebar.appendChild(projFive);

const projSix = document.createElement("div");
projSix.textContent = "empty";
projSix.classList.add("add-proj");
projSix.classList.add("invisible");
projSix.classList.add("bold-hover");
wholeSidebar.appendChild(projSix);

export { projectsSection, defaultProj, projTwo, wholeSidebar, projThree, projFour, projFive, projSix };

