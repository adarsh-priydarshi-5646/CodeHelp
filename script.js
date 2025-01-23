// Optional: Add custom JavaScript if needed for advanced functionality
console.log("Navbar initialized");
document.querySelector(".notify-btn").addEventListener("click", () => {
  alert("You will be notified about CodeHelp RED!");
});

document.querySelector(".primary-btn").addEventListener("click", () => {
  alert("Redirecting to courses!");
});

document.querySelectorAll(".features button").forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.color = "#ff4d4d";
  });
  button.addEventListener("mouseleave", () => {
    button.style.color = "white";
  });
});


const box2 = document.getElementById("interactiveBox");

      box2.addEventListener("mousemove", (e) => {
        const rect = box2.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate tilt effect
        const tiltX = ((x - centerX) / centerX) * 20;
        const tiltY = ((y - centerY) / centerY) * -20;

        // Set transform to rotate the box
        box2.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

        // Set mouse position variables
        box2.style.setProperty("--mouseX", `${(x / rect.width) * 100 - 50}%`);
        box2.style.setProperty("--mouseY", `${(y / rect.height) * 100 - 50}%`);

        // Adjust borders based on mouse position
        const borderOpacity = 0.8; // Adjust border opacity for visibility
        const leftBorder = x < centerX ? borderOpacity : 0;
        const rightBorder = x > centerX ? borderOpacity : 0;
        const topBorder = y < centerY ? borderOpacity : 0;
        const bottomBorder = y > centerY ? borderOpacity : 0;

        // box2.style.borderTop = `2px solid rgba(255, 255, 255, ${topBorder})`;
        // box2.style.borderBottom = `2px solid rgba(255, 255, 255, ${bottomBorder})`;
        // box2.style.borderLeft = `2px solid rgba(255, 255, 255, ${leftBorder})`;
        // box2.style.borderRight = `2px solid rgba(255, 255, 255, ${rightBorder})`;
      });

      box2.addEventListener("mouseleave", () => {
        box2.style.transform = "rotateX(0) rotateY(0)";
        // box2.style.borderTop = "2px solid rgba(255, 255, 255, 0.2)";
        // box2.style.borderBottom = "2px solid rgba(255, 255, 255, 0.2)";
        // box2.style.borderLeft = "2px solid rgba(255, 255, 255, 0.2)";
        // box2.style.borderRight = "2px solid rgba(255, 255, 255, 0.2)";
      });