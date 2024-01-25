document.addEventListener("DOMContentLoaded", function () {
  let menuicn = document.querySelector(".menuicn");
  let nav = document.querySelector(".navcontainer");
  let dashboardLink = document.getElementById("dashboard-link");
  let usersLink = document.getElementById("users-link");
  let blogsLink = document.getElementById("blogs-link");
  let profileLink = document.getElementById("profile-link");
  let logoutLink = document.getElementById("logout-link");

  let dashboardSection = document.getElementById("dashboard-section");
  let usersSection = document.getElementById("users-section");
  let blogsSection = document.getElementById("blogs-section");
  let profileSection = document.getElementById("profile-section");
  let logoutSection = document.getElementById("logout-section");

  // Add event listeners for each navigation link
  dashboardLink.addEventListener("click", () => {
    showSection(dashboardSection);
  });

  usersLink.addEventListener("click", () => {
    showSection(usersSection);
  });

  blogsLink.addEventListener("click", () => {
    showSection(blogsSection);
  });

  profileLink.addEventListener("click", () => {
    showSection(profileSection);
  });

  logoutLink.addEventListener("click", () => {
    showSection(logoutSection);
  });

  // Function to hide all sections and show the selected section
  function showSection(section) {
    // Hide all sections
    dashboardSection.style.display = "none";
    usersSection.style.display = "none";
    blogsSection.style.display = "none";
    profileSection.style.display = "none";
    logoutSection.style.display = "none";

    // Show the selected section
    section.style.display = "block";

    // Close the navigation menu (if needed)
    nav.classList.remove("navclose");
  }

  // Toggle navigation menu on menu icon click
  menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
  });

  // Initially, show only the dashboard section after a small delay
  setTimeout(() => {
    showSection(dashboardSection);
  }, 100);
});
