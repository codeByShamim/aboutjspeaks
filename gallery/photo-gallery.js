// const albums = {
//     album1: ['../assets/pl07t07.jpg', '../assets/al01img01.jpg', '../assets/al01img02.jpg'],
//     album2: ['../assets/g1.png', '../assets/g2.png', '../assets/g3.png'],
//     album3: ['../assets/g1.png', '../assets/g2.png', '../assets/g3.png'],
//     album4: ['../assets/g2.png', '../assets/g1.png', '../assets/g3.png']
  
// };

// let currentAlbum = [];
// let currentIndex = 0;

// // Display small images in albums
// for (const [key, value] of Object.entries(albums)) {
//     const albumImagesContainer = document.getElementById(`${key}-images`);
//     value.forEach(image => {
//         const img = document.createElement('img');
//         img.src = image;
//         img.onclick = () => showAlbum(key);
//         albumImagesContainer.appendChild(img);
//     });
// }

// function showAlbum(album) {
//     currentAlbum = albums[album];
//     currentIndex = 0;
//     openModal(currentAlbum[currentIndex]);
//     document.getElementById('album-title').innerText = album.charAt(0).toUpperCase() + album.slice(1);
// }

// function closeGallery() {
//     document.getElementById('gallery').style.display = 'none';
// }

// function openModal(image) {
//     const existingModal = document.querySelector('.modal');
//     if (existingModal) {
//         existingModal.remove(); // Remove the existing modal
//     }

//     const modal = document.createElement('div');
//     modal.className = 'modal';

//     const img = document.createElement('img');
//     img.src = image;
//     modal.appendChild(img);

//     // Navigation buttons
//     const leftNav = document.createElement('div');
//     leftNav.className = 'navigation left';
//     leftNav.innerHTML = '&#10094;';
//     leftNav.onclick = (e) => {
//         e.stopPropagation();
//         navigate(-1);
//     };

//     const rightNav = document.createElement('div');
//     rightNav.className = 'navigation right';
//     rightNav.innerHTML = '&#10095;';
//     rightNav.onclick = (e) => {
//         e.stopPropagation();
//         navigate(1);
//     };

//     modal.appendChild(leftNav);
//     modal.appendChild(rightNav);

//     modal.onclick = (e) => {
//         if (e.target === modal) {
//             document.body.removeChild(modal);
//         }
//     };

//     document.body.appendChild(modal);
// }

// function navigate(direction) {
//     currentIndex += direction;

//     // Wrap around if we go out of bounds
//     if (currentIndex < 0) currentIndex = currentAlbum.length - 1;
//     if (currentIndex >= currentAlbum.length) currentIndex = 0;

//     // Update the modal image
//     const modalImage = document.querySelector('.modal img');
//     if (modalImage) {
//         modalImage.src = currentAlbum[currentIndex];
//     }
// }

// function showAlbum(album) {
//     currentAlbum = albums[album];
//     currentIndex = 0; // Start with the first image
//     openModal(currentAlbum[currentIndex]); // Open modal with the first image
// }

// function openModal(image) {
//     const currentImage = document.getElementById('current-image');
//     currentImage.src = image; // Set the current large image

//     const galleryImagesContainer = document.querySelector('.gallery-images');
//     galleryImagesContainer.innerHTML = ''; // Clear previous thumbnails

//     // Create thumbnails
//     currentAlbum.forEach((img) => {
//         const thumbImg = document.createElement('img');
//         thumbImg.src = img;
//         thumbImg.onclick = () => {
//             currentImage.src = img; // Change the current image
//         };
//         galleryImagesContainer.appendChild(thumbImg);
//     });

//     document.querySelector('.overlay').style.display = 'block'; // Show overlay
//     document.getElementById('gallery').style.display = 'flex'; // Use flex to center modal content
// }

// function closeGallery() {
//     document.querySelector('.overlay').style.display = 'none'; // Hide overlay
//     document.getElementById('gallery').style.display = 'none'; // Hide gallery
// }



// function navigate(direction) {
//     currentIndex += direction;

//     // Wrap around if we go out of bounds
//     if (currentIndex < 0) currentIndex = currentAlbum.length - 1;
//     if (currentIndex >= currentAlbum.length) currentIndex = 0;

//     const currentImage = document.getElementById('current-image');
//     currentImage.src = currentAlbum[currentIndex]; // Change the image in the modal
// }


// <!-- Album Section -->
// <section id="album-section">
//     <h2>Select an Album</h2><br>
//     <div class="albums">
//         <div class="album" onclick="showAlbum('album1')">
//             <h3>Album 1</h3>
//             <div class="album-images" id="album1-images"></div>
//         </div>
//         <div class="album" onclick="showAlbum('album2')">
//             <h3>Album 2</h3>
//             <div class="album-images" id="album2-images"></div>
//         </div>
//         <div class="album" onclick="showAlbum('album3')">
//             <h3>Album 3</h3>
//             <div class="album-images" id="album3-images"></div>
//         </div>
//         <div class="album" onclick="showAlbum('album4')">
//             <h3>Album 4</h3>
//             <div class="album-images" id="album4-images"></div>
//         </div>
//     </div>

//     <div class="overlay" style="display: none;"></div>
//     <div id="gallery" class="gallery" style="display:none;">
//         <div class="close-btn" onclick="closeGallery()">X</div>
//         <h3 id="album-title"></h3>
//         <div class="big-image">
//             <img id="current-image" src="" alt="Current Image">
//         </div>
//         <div class="gallery-images"></div>
//         <div class="navigation left" onclick="navigate(-1)">&#10094;</div>
//         <div class="navigation right" onclick="navigate(1)">&#10095;</div>
//     </div>
    
    
    
// </section>
