// Get iframe and playlist items
const videoPlayer = document.getElementById('videoPlayer');
const playlistItems = document.querySelectorAll('#playlist li');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Play the selected video by changing the iframe src
playlistItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all items
        playlistItems.forEach(item => item.classList.remove('active'));
        // Add active class to the clicked item
        this.classList.add('active');
        
        // Set iframe source to the selected video HTML page
        const videoSrc = this.getAttribute('data-src');
        videoPlayer.src = videoSrc;
    });
});

// Fullscreen functionality
fullscreenBtn.addEventListener('click', function() {
    // Check if the document supports fullscreen API
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) { // For Firefox
        videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) { // For Chrome and Safari
        videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) { // For IE/Edge
        videoPlayer.msRequestFullscreen();
    }
});
