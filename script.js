function showContent(contentId) {
    const popupWindow = document.getElementById('popupWindow');
    const dynamicContent = document.getElementById('dynamicContent');

    // Set the content for the popup window based on the tile clicked
    if (contentId === 1) {
        dynamicContent.innerHTML = "<h2>Experience</h2><p>This is where I talk about my experience in the tech world.</p>";
    } else if (contentId === 2) {
        dynamicContent.innerHTML = "<h2>Projects</h2><p>Here are some of the projects I have worked on.</p>";
    } else if (contentId === 3) {
        dynamicContent.innerHTML = "<h2>Skills</h2><p>These are the skills I bring to the table in software development.</p>";
    }

    // Show the popup window
    popupWindow.style.display = 'block';

    // Highlight the clicked tile and apply selected style
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.classList.remove('selected');  // Remove selected class from all tiles
    });

    const tileToHighlight = document.getElementById(`tile${contentId}`);
    tileToHighlight.classList.add('selected');  // Add selected class to scale up the tile
}

function closePopup() {
    // Hide the popup window when the close button is clicked
    const popupWindow = document.getElementById('popupWindow');
    popupWindow.style.display = 'none';
}

function onHover(id) {
    const bubble = document.getElementById('bubble' + id);
    bubble.style.display = 'block';  // Show the bubble
    bubble.style.opacity = 1;  // Ensure the bubble is visible
}

function onMouseOut(id) {
    const bubble = document.getElementById('bubble' + id);
    bubble.style.display = 'none';  // Hide the bubble
    bubble.style.opacity = 0;  // Ensure the bubble is invisible
}
