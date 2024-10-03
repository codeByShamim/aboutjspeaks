document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("videoModal");
    const modalDesc = document.getElementById("modalDesc");
    const modalLink = document.getElementById("modalLink");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.querySelector(".modal-close");

    // Profile elements for first profile
    const modalProfileImage1 = document.getElementById("modalProfileImage1");
    const modalUsername1 = document.getElementById("modalUsername1");

    // Profile elements for second profile
    const modalProfileImage2 = document.getElementById("modalProfileImage2");
    const modalUsername2 = document.getElementById("modalUsername2");

    // Social media buttons container
    const socialMediaContainer = document.querySelector('.social-media-buttons');

    const pItems = document.querySelectorAll(".pitem");

    pItems.forEach(item => {
        item.querySelector(".learn-more").addEventListener("click", function (event) {
            event.preventDefault();

            const imgSrc = item.querySelector("img").getAttribute("src");
            const videoLink = item.querySelector("a").getAttribute("href") || "#"; // Get video link
            const descId = item.getAttribute("data-desc");

            // Set modal content
            modalImage.src = imgSrc;
            modalLink.href = videoLink; // Set YouTube link in "Watch Now" button

            // Fetch description and profile info from descriptions.html
            fetch("descriptions.html")
                .then(response => response.text())
                .then(data => {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = data; // Load HTML content into a temporary div
                    const description = tempDiv.querySelector(`#${descId}`); // Get the description by ID

                    if (description) {
                        modalDesc.innerHTML = description.innerHTML; // Use innerHTML to maintain formatting
                    } else {
                        modalDesc.innerHTML = "Description not found.";
                    }

                    // Set profile info for profile 1
                    modalProfileImage1.src = item.getAttribute("data-profile-image1") || ""; // Profile image source
                    modalUsername1.innerText = item.getAttribute("data-username1") || "User Name 1"; // Username 1

                    // Set profile info for profile 2 if exists
                    const profileImage2 = item.getAttribute("data-profile-image2");
                    const username2 = item.getAttribute("data-username2");

                    if (profileImage2 && username2) {
                        modalProfileImage2.src = profileImage2; // Profile image source
                        modalUsername2.innerText = username2; // Username 2
                        document.getElementById("profile2").style.display = "block"; // Show second profile
                    } else {
                        document.getElementById("profile2").style.display = "none"; // Hide second profile
                    }

                    // Set social media links
                    const links = {
                        twitter: item.getAttribute("data-twitter"),
                        instagram: item.getAttribute("data-instagram"),
                        instagram2: item.getAttribute("data-instagram2"), // New attribute for second Instagram
                        facebook: item.getAttribute("data-facebook"),
                        linkedin: item.getAttribute("data-linkedin"),
                        amazon: item.getAttribute("data-amazon"),
                        youtube: item.getAttribute("data-youtube"),
                        tiktok: item.getAttribute("data-tiktok"),
                        website: item.getAttribute("data-website"),
                        website2: item.getAttribute("data-website2")
                    };

                    socialMediaContainer.innerHTML = ''; // Clear existing icons

                    for (const [key, value] of Object.entries(links)) {
                        if (value) {
                            const iconClass = {
                                twitter: "fab fa-twitter",
                                instagram: "fab fa-instagram",
                                instagram2: "fab fa-instagram", // Class for second Instagram
                                facebook: "fab fa-facebook",
                                linkedin: "fab fa-linkedin",
                                amazon: "fab fa-amazon",
                                youtube: "fab fa-youtube",
                                tiktok: "fab fa-tiktok",
                                website: "fas fa-globe",
                                website2: "fas fa-globe"
                            }[key];

                            const linkHTML = `<a href="${value}" target="_blank"><i class="${iconClass}"></i></a>`;
                            socialMediaContainer.innerHTML += linkHTML; // Add the icon link
                        }
                    }

                    modal.style.display = "block"; // Open modal
                })
                .catch(error => {
                    console.error("Error fetching descriptions:", error);
                    modalDesc.innerHTML = "Error loading description.";
                    modal.style.display = "block"; // Open modal
                });
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Close modal
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Close modal
        }
    });
});
