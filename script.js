// Demonstrate parameters + return values
function repeatAnimation(times) {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push("Bounce " + (i + 1));
  }
  return result;
}

// Trigger animation
function startAnimation() {
  const box = document.getElementById("box");
  const numInput = document.getElementById("numInput");
  const times = parseInt(numInput.value) || 1;

  const results = repeatAnimation(times);
  console.log("Animation sequence:", results);

  let count = 0;

  // Animation loop
  function animateBox() {
    box.classList.add("animate");

    setTimeout(() => {
      box.classList.remove("animate");
      count++;
      if (count < times) {
        setTimeout(animateBox, 300);
      }
    }, 500);
  }

  animateBox();
}
