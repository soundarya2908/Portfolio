function showContent(contentId) {
    // Hide all content
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tiles
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    });

    // Show the clicked content
    const contentToShow = document.getElementById(`content${contentId}`);
    contentToShow.classList.add('active');

    // Highlight the clicked tile
    const tileToHighlight = document.getElementById(`tile${contentId}`);
    tileToHighlight.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
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



