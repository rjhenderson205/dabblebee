// Select the container for the bokeh effect
const bokehContainer = document.querySelector('.bokeh-background');
const numParticles = 50; // Main colored orbs
const numWhiteOrbs = 8; // Fewer, smaller, lighter orbs
// Function to generate a random number within a range
function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Create main colored particles
for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('bokeh-particle');

  // Randomize properties
  const size = randomRange(60, 180); // Larger particle size
  // Position: favor left and right sides (0-30% and 70-100%)
  let posX;
  if (Math.random() < 0.5) {
    posX = randomRange(-10, 30); // Left side
  } else {
    posX = randomRange(70, 110); // Right side
  }
  const posY = randomRange(-10, 110);
  const delay = randomRange(0, 6);
  const duration = randomRange(5, 8);
  // Moonlight/twilight: soft blue, pink, lavender, some pale yellow
  const moonHues = [randomRange(210, 240), randomRange(340, 360), randomRange(270, 300), randomRange(45, 55)];
  const hue = moonHues[Math.floor(Math.random() * moonHues.length)];
  const lightness = randomRange(80, 95);
  const alpha = randomRange(0.10, 0.22);

  // Subtle glow for some orbs
  if (Math.random() < 0.4) {
    particle.style.boxShadow = `0 0 ${randomRange(30, 80)}px ${randomRange(10, 30)}px hsla(${hue}, 100%, 90%, 0.25)`;
  }

  // Apply styles
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${posX}%`;
  particle.style.top = `${posY}%`;
  particle.style.animationDelay = `${delay}s`;
  particle.style.animationDuration = `${duration}s`;
  particle.style.backgroundColor = `hsla(${hue}, 100%, ${lightness}%, ${alpha})`;

  // Append to container
  bokehContainer.appendChild(particle);
}

// Create smaller, lighter white orbs
for (let i = 0; i < numWhiteOrbs; i++) {
  const particle = document.createElement('div');
  particle.classList.add('bokeh-particle', 'bokeh-white');
  const size = randomRange(24, 48); // Smaller
  let posX;
  if (Math.random() < 0.5) {
    posX = randomRange(-10, 30);
  } else {
    posX = randomRange(70, 110);
  }
  const posY = randomRange(-10, 110);
  const delay = randomRange(0, 6);
  const duration = randomRange(5, 8);
  const lightness = randomRange(98, 100);
  const alpha = randomRange(0.13, 0.22);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${posX}%`;
  particle.style.top = `${posY}%`;
  particle.style.animationDelay = `${delay}s`;
  particle.style.animationDuration = `${duration}s`;
  particle.style.backgroundColor = `hsla(0, 0%, ${lightness}%, ${alpha})`;
  particle.style.boxShadow = `0 0 ${randomRange(40, 90)}px ${randomRange(10, 30)}px hsla(0, 0%, 100%, 0.25)`;
  bokehContainer.appendChild(particle);
}
