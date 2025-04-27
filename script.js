// Simulating loading effect and showing content after 4 seconds
window.onload = () => {
  setTimeout(() => {
    // Hide the loading screen
    document.querySelector('.loading-screen').style.display = 'none';
    // Show the bio data
    document.querySelector('.bio-data').style.display = 'block';
  }, 4000); // 4000ms = 4