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

const newProj = document.createElement("div");
newProj.textContent = "New List";
newProj.classList.add("add-proj");
newProj.classList.add("bold-hover")
wholeSidebar.appendChild(newProj);

export { projectsSection, defaultProj, newProj, wholeSidebar };

