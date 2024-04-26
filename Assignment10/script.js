const modeToggle = document.querySelector("#modeToggle");

modeToggle.addEventListener("click", function() {
    // event.preventDefault();
    document.body.classList.toggle("dark-mode");
    console.log("Hey!");
});