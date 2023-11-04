var design = anime({
    targets: 'svg #XMLID5',
    keyframes: [
      {translateX: -500},
      {rotateY: 180},
      {translateX: 920},
      {rotateY: 0},
      {translateX: -500},
      {rotateY: 180},
      {translateX: -500},
    ],
    easing: 'easeInOutSine',
    duration: 60000,
  });

  const animatedElement = document.getElementById('animated-element');
let positionX = 0;
let direction = 1; // 1 for right, -1 for left

function animate() {
    // Update the position of the animated element
    positionX += 5 * direction;
    animatedElement.style.left = positionX + 'px';

    // Reverse direction when the element reaches the screen's edge
    if (positionX >= window.innerWidth - animatedElement.clientWidth || positionX <= 0) {
        direction *= -1;
    }

    // Request the next animation frame
    requestAnimationFrame(animate);
}

// Start the animation
animate();


