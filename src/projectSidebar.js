const wholeSidebar = document.querySelector(".sidebar");
    
const usernameSection = document.createElement("div");
usernameSection.textContent = "User Name";
usernameSection.classList.add("username-section");
wholeSidebar.appendChild(usernameSection);

const projectsSection = document.createElement("div");
projectsSection.textContent = "Projects";
projectsSection.classList.add("projects-section");
wholeSidebar.appendChild(projectsSection);

export { projectsSection };

