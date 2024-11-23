// Wait for the page to load, then play the video after a 2-second delay
window.onload = function () {
    setTimeout(() => {
        // Hide the thumbnail image
        document.getElementById('videoThumbnail').style.display = 'none';

        // Show the local video and play it
        const localVideo = document.getElementById('localVideo');
        localVideo.style.display = 'block';
        localVideo.play();
    }, 2000); // 2-second delay
};