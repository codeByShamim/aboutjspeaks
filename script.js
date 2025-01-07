// <!-- js code start here for this html code-->
function togglePlaylist() {
  var playlistDiv = document.getElementById("playlists");

  // Check if it's currently hidden
  if (playlistDiv.style.display === "none" || playlistDiv.style.display === "") {
    playlistDiv.style.display = "block";  // Show the div
  } else {
    playlistDiv.style.display = "none";   // Hide the div
  }
}


const toggleBtn = document.getElementById('toggle-btn');
const navContent = document.querySelector('.nav-content');
const barsIcon = toggleBtn.querySelector('.fa-bars');
const xIcon = toggleBtn.querySelector('.fa-x');

toggleBtn.addEventListener('click', () => {
  if (navContent.style.display === 'none' || navContent.style.display === '') {
    navContent.style.display = 'block';
    barsIcon.style.display = 'none';
    xIcon.style.display = 'block';
  } else {
    navContent.style.display = 'none';
    barsIcon.style.display = 'block';
    xIcon.style.display = 'none';
  }
});


// header banner
  document.addEventListener("DOMContentLoaded", function () {
    const bottomRightImages = document.querySelectorAll(".bottom-right-wrapper");

    // Automatically fade out the bottom-right images after 3 seconds
    setTimeout(() => {
      bottomRightImages.forEach((wrapper) => {
        wrapper.style.transition = "opacity 5s"; // Smooth fade-out effect
        wrapper.style.opacity = "0"; // Fade out the image
        setTimeout(() => {
          wrapper.style.display = "none"; // Hide the wrapper completely after fade-out
        }, 3000); // Wait for the fade-out transition to complete
      });
    }, 3000); // Wait for 3 seconds before fading out
  });

// video play btn for focus section video********************
// Function to play a video and hide its thumbnail
function playVideo(video, thumbnail) {
  thumbnail.style.display = 'none'; // Hide the thumbnail
  video.style.display = 'block'; // Show the video
  video.play(); // Play the video
}
// First video section
const video1 = document.getElementById('video');
const thumbnail1 = document.querySelector('.video-thumbnail');

// Click event for the thumbnail of the first video
thumbnail1.addEventListener('click', function () {
  playVideo(video1, this); // Play video 1 when thumbnail is clicked
});

// mision vision animation*********************
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scrolling
function handleScroll() {
  const missionParagraph = document.querySelector('.mision');
  const visionParagraph = document.querySelector('.vision');

  if (isElementInViewport(missionParagraph)) {
    setTimeout(() => {
      missionParagraph.classList.add('show');
    }, 300); // Delay for the mission paragraph (300 ms)
  }

  if (isElementInViewport(visionParagraph)) {
    setTimeout(() => {
      visionParagraph.classList.add('show');
    }, 600); // Delay for the vision paragraph (600 ms)
  }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Second video section**********************************
const video2 = document.getElementById('video2'); // Ensure this ID matches your second video
const thumbnail2 = document.querySelector('.play-btn'); // Assuming this is the button for the second video

// Click event for the second video
thumbnail2.addEventListener('click', function () {
  const thumbnailContainer = thumbnail2.closest('.video-thumbnail');
  playVideo(video2, thumbnailContainer); // Play video 2 when the button is clicked
});


