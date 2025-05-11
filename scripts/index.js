// Toggle menu on small screens
document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("mainNav").classList.toggle("show");
});

// Copyright + Last Modified
document.getElementById("copyright").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Update: " + document.lastModified;

// Course data
const courses = [
    { code: 'CSE 110', name: 'Intro to Programming', credits: 3, completed: true },
    { code: 'WDD 130', name: 'Web Dev Fundamentals', credits: 2, completed: true },
    { code: 'CSE 111', name: 'Programming w/ Functions', credits: 3, completed: false },
    { code: 'CSE 210', name: 'Software Design', credits: 3, completed: false },
    { code: 'WDD 131', name: 'Responsive Web Design', credits: 2, completed: false },
    { code: 'WDD 231', name: 'Frontend Dev I', credits: 2, completed: false }
];

const courseContainer = document.getElementById("courses");
const creditDisplay = document.getElementById("totalCredits");

function displayCourses(filter = "all") {
    courseContainer.innerHTML = "";
    let filtered = courses.filter(course => {
        if (filter === "all") return true;
        return course.code.startsWith(filter);
    });

    let total = 0;

    filtered.forEach(course => {
        const div = document.createElement("div");
        div.className = "course" + (course.completed ? " completed" : "");
        div.textContent = course.code;
        courseContainer.appendChild(div);
        total += course.credits;
    });

    creditDisplay.textContent = total;
}

// Event listeners for filter buttons
document.querySelectorAll(".filters button").forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        displayCourses(filter);
    });
});

// Initial load
displayCourses();
  