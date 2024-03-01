const content = document.getElementById('content');
let currentPage = ''; // Track the current page

// Function to load content without refreshing the page
function loadContent(url) {
    fetch(url)
    .then(response => response.text())
    .then(html => {
        content.innerHTML = html;
    });
}
loadContent(home.html);
// Function to handle navigation clicks
function handleNavigation(event) {
    event.preventDefault();
    const targetId = event.target.id;

    if (targetId !== currentPage) {
        loadContent(targetId + '.html'); // Load content based on button id
        currentPage = targetId; // Update current page
    }
}

// Function to handle gathering buttons
function handleGathering(event) {
    event.preventDefault();
    loadContent(event.target.id + '.html'); // Load content based on button id
}

// Event listener for navigation links
document.querySelectorAll('.nav-bar a').forEach(link => {
    link.addEventListener('click', handleNavigation);
});

// Event listener for gathering buttons
document.querySelectorAll('.gathering-button').forEach(button => {
    button.addEventListener('click', handleGathering);
});
