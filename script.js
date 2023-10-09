document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("holographicCard");
  const content = card.querySelector(".content");


  card.addEventListener("mouseenter", () => {
    content.style.setProperty("--shimmer-opacity", "1");
    card.style.transition = 'none'; // Disable transitions to allow real-time updates
  });

  card.addEventListener("mouseleave", () => {
    content.style.setProperty("--shimmer-opacity", "0");
    card.style.transition = 'transform 0.5s ease'; // Enable transition for smooth return
    card.style.transform = 'rotateX(0deg) rotateY(0deg)'; // Reset to original position
  });

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize the coordinates to be between 0 and 1
    const normX = x / rect.width;
    const normY = y / rect.height;

    // Calculate the angle of the shimmer based on cursor position
    const angle = Math.atan2(normY - 0.5, normX - 0.5) * (180 / Math.PI);

    // Calculate the rotation angles for the card based on cursor position
    const rotateX = (normY - 0.5) * 30;  // Vary the multiplier for stronger/weaker effect
    const rotateY = (normX - 0.5) * -30; // Vary the multiplier for stronger/weaker effect

    content.style.setProperty("--shimmer-angle", `${angle}deg`);
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});
