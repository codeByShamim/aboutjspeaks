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


// Accordion section JavaScript*******************************************************
var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
// Open the first panel by default
acc[0].classList.add("active");
panels[0].style.maxHeight = panels[0].scrollHeight + "px";
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Close all panels and reset icons
    for (var j = 0; j < panels.length; j++) {
      panels[j].style.maxHeight = null;
      acc[j].classList.remove("active");
    }
    // Toggle the "active" class and open/close the clicked panel************************
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


