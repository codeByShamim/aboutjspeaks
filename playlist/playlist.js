// Select the text elements
const realPeople = document.querySelector('.real-people');
const realConversations = document.querySelector('.real-conversations');
const jspeaks = document.querySelector('.jspeaks');

// Function to trigger the animations
function triggerAnimation() {
  // Reset the elements' styles (so we can re-trigger the animation)
  realPeople.style.animation = 'none';
  realConversations.style.animation = 'none';
  jspeaks.style.animation = 'none';

  // Reflow to restart animation
  realPeople.offsetHeight; // Trigger a reflow
  realConversations.offsetHeight;
  jspeaks.offsetHeight;

  // Set the animation back and trigger the sequence
  realPeople.style.animation = 'fadeIn 1.5s ease-in-out forwards';
  realConversations.style.animation = 'fadeIn 1.5s ease-in-out forwards 3s'; // Delay for 3s
  jspeaks.style.animation = 'fadeIn 1.5s ease-in-out forwards 6s'; // Delay for 6s
}

// Trigger the animation sequence initially
triggerAnimation();

// Use setInterval to restart the animation every 9.5 seconds (the full sequence duration)
setInterval(triggerAnimation, 9500); // 9.5 seconds is the duration of the full sequence
