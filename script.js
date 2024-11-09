const menuButtons = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".main-layout .screen-overlay");
const themeButton = document.querySelector(".navbar .theme-button i");

// Toggle sidebar visibility when menu buttons are clicked
menuButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });
});

// Toggle sidebar visibility when screen overlay is clicked
screenOverlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hidden");
});

// Initialize dark mode based on localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeButton.classList.replace("uil-moon", "uil-sun");
} else {
  themeButton.classList.replace("uil-sun", "uil-moon");
}

// Toggle dark mode when theme button is clicked
themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  themeButton.classList.toggle("uil-sun", isDarkMode);
  themeButton.classList.toggle("uil-moon", !isDarkMode);
});

// Show sidebar on large screens by default
if (window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hidden");
}

// Search 
// Add event listener to the search form
document.querySelector('.search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const query = document.querySelector('.search-input').value.toLowerCase();
  
  // Get all video cards
  const videos = document.querySelectorAll('.video-card');
  
  videos.forEach(video => {
      const title = video.querySelector('.title').textContent.toLowerCase();
      
      // Show video if it matches the query, otherwise hide it
      if (title.includes(query)) {
          video.style.display = 'block';
      } else {
          video.style.display = 'none';
      }
  });
});

// Add event listener for the search input to handle clearing
document.querySelector('.search-input').addEventListener('input', function() {
  const query = this.value.toLowerCase();

  // Get all video cards
  const videos = document.querySelectorAll('.video-card');

  videos.forEach(video => {
      const title = video.querySelector('.title').textContent.toLowerCase();

      // If the search input is empty, show all videos
      if (query === '' || title.includes(query)) {
          video.style.display = 'block';
      } else {
          video.style.display = 'none';
      }
  });
});

// Mobile Responsive Search

document.getElementById('searchInput').addEventListener('keyup', function() {
  let filter = this.value.toLowerCase();
  let movieItems = document.querySelectorAll('.video-card');

  movieItems.forEach(function(item) {
      let title = item.querySelector('.title').innerText.toLowerCase();
      if (title.includes(filter)) {
          item.style.display = "block";
      } else {
          item.style.display = "none";
      }
  });
});
