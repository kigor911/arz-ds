

function showSection(sectionId) {
    const loader = document.getElementById("loader");
    const sections = document.querySelectorAll(".container");
    sections.forEach(section => {
        section.style.opacity = "0";
        setTimeout(() => section.classList.remove("active"), 500);
    });
    setTimeout(() => {
        document.getElementById(sectionId).classList.add("active");
        document.getElementById(sectionId).style.opacity = "1";
    }, 500);
    sections.forEach(section => section.style.display = "none");
    loader.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";
        document.getElementById(sectionId).style.display = "block";
    }, 1000);
}