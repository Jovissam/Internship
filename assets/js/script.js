// code to switch themes
const main = document.querySelector("#main");
const themeToggle = document.querySelector("#themeToggle");
const moon = document.querySelector("#toggleMoon");
const sun = document.querySelector("#toggleSun");

const loadTheme = localStorage.getItem("myTheme") || "darkTheme";
main.classList.add(loadTheme);

themeToggle.addEventListener("click", function () {
  main.classList.toggle("darkTheme");
  main.classList.toggle("lightTheme");
  moon.classList.toggle("d-none");
  sun.classList.toggle("d-none");
  sun.style.color = "orange";

  let currentTheme;
  if (main.classList.contains("lightTheme")) {
    currentTheme = "lightTheme";
  } else {
    currentTheme = "darkTheme";
  }
  localStorage.setItem("myTheme", currentTheme);
});
// localStorage.clear()

const sidebarToogle = document.querySelector("#sidebarToogle");
const navlink = document.querySelector("#navlink");

sidebarToogle.addEventListener("click", function () {
  navlink.classList.toggle("hideSidebar");
});

function counts(years, projects, clients) {
  for (let i = 0; i <= years; i++) {
    const val = i;
    setTimeout(function () {
      document.getElementById("exprienceCount").textContent = `${val}+`;
    }, val * 150);
  }
  for (let i = 0; i <= projects; i++) {
    const val = i;
    setTimeout(function () {
      document.getElementById("projectsCount").textContent = `${val}+`;
    }, val * 150);
  }
  for (let i = 0; i <= clients; i++) {
    const val = i;
    setTimeout(function () {
      document.getElementById("clientsCount").textContent = `${val}+`;
    }, val * 150);
  }
}
counts(2, 18, 20);

// to scroll to the top
const scrollTop = document.getElementById("scroll");
scrollTop.addEventListener("click", (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// to scroll to each indvidual section
const navControl = document.querySelectorAll("#nav-control");
const about = document.getElementById("about");
const service = document.getElementById("services");
const works = document.getElementById("works");
const contactMe = document.getElementById("contact-me");

let yAxis = null;
function scrollValue(value) {
  window.scrollTo({ top: value, behavior: "smooth" });
}
// looping through the nav control
navControl.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.innerText === "Portfolio") {
      yAxis = works.offsetTop;
      scrollValue(yAxis);
    }
    if (e.target.innerText === "Services") {
      yAxis = service.offsetTop;
      scrollValue(yAxis);
    }
    if (e.target.innerText === "Contact") {
      yAxis = contactMe.offsetTop;
      scrollValue(yAxis);
    }
    if (e.target.innerText === "About") {
      yAxis = about.offsetTop;
      scrollValue(yAxis);
    }
  });
});
