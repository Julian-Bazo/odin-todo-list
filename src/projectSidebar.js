const wholeSidebar = document.querySelector(".sidebar");
    
const usernameSection = document.createElement("div");
usernameSection.textContent = "JBaz's Lists";
usernameSection.classList.add("username-section");
wholeSidebar.appendChild(usernameSection);

const projectsSection = document.createElement("div");
projectsSection.textContent = "Lists:";
projectsSection.classList.add("projects-section");
wholeSidebar.appendChild(projectsSection);

const defaultProj = document.createElement("div");
defaultProj.classList.add("clickable-proj");
defaultProj.classList.add("overflow");
defaultProj.classList.add("bold-hover");
defaultProj.textContent = "Welcome!"
wholeSidebar.appendChild(defaultProj);

const projTwo = document.createElement("div");
projTwo.textContent = "New List 2";
projTwo.classList.add("add-proj");
projTwo.classList.add("bold-hover")
projTwo.classList.add("overflow");
wholeSidebar.appendChild(projTwo);

const projThree = document.createElement("div");
projThree.textContent = "New List 3";
projThree.classList.add("add-proj");
projThree.classList.add("overflow");
projThree.classList.add("bold-hover");
wholeSidebar.appendChild(projThree);

const projFour = document.createElement("div");
projFour.textContent = "New List 4";
projFour.classList.add("add-proj");
projFour.classList.add("overflow");
projFour.classList.add("bold-hover");
wholeSidebar.appendChild(projFour);

const projFive = document.createElement("div");
projFive.textContent = "New List 5";
projFive.classList.add("add-proj");
projFive.classList.add("overflow");
projFive.classList.add("bold-hover");
wholeSidebar.appendChild(projFive);

const projSix = document.createElement("div");
projSix.textContent = "New List 6";
projSix.classList.add("add-proj");
projSix.classList.add("overflow");
projSix.classList.add("bold-hover");
wholeSidebar.appendChild(projSix);

export { projectsSection, defaultProj, projTwo, wholeSidebar, projThree, projFour, projFive, projSix };

