document.addEventListener("DOMContentLoaded", () => {
    const moodButtons = document.querySelectorAll(".mood");
    const body = document.body;

    const moodColors = {
        happy: "yellow",
        sad: "blue",
        excited: "orange",
        calm: "lightblue"
    };

    moodButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedMood = button.getAttribute("data-mood");
            body.style.backgroundColor = moodColors[selectedMood];
        });
    });
});
