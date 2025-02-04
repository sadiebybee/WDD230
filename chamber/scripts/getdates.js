// Display the date and year
function getCopyrightYear() {
    const year = new Date().getFullYear();
    return `&copy; ${year}`;
}
document.getElementById("cYear").innerHTML = getCopyrightYear();

// Display the last modified date of the page
const options = {
    month: "short",
		day: "numeric",
		year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
};

function getLastModified() {
    const lastModified = new Date(document.lastModified).toLocaleDateString("en-US", options);
    return `Last Modified: ${lastModified}`;
}
document.getElementById("lastModified").innerHTML = getLastModified();

// ********* Hamburger Menu *********

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// ******** Dark mode section ***********
const dark = document.querySelector("#dark");
const main = document.querySelector("main");

dark.addEventListener("click", () => {
	if (dark.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		dark.textContent = "🔅";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		dark.textContent = "🕶️";
	}
});