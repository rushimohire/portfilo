
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

  // Particles.js config
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80 },
      "size": { "value": 3 },
      "move": { "speed": 2 },
      "line_linked": { "enable": true, "color": "#00ffcc" }
    }
  });

  // Animated roles
  const roles = ["Cyber Security Enthusiast", "Full Stack Developer", "Researcher & Learner"];
  let roleIndex = 0;
  const roleElement = document.querySelector(".animated-role");
  function changeRole() {
    roleElement.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
  }
  setInterval(changeRole, 2500);
  changeRole();