var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

function onNext() {
  let circles = Array.from(document.querySelectorAll(".circle"));
  let progress = document.querySelector(".progress");
  let currentIndex = 0;
  let currentCircle = null;
  circles.forEach((circle) => {
    currentCircle =
      currentCircle == null
        ? circle.classList.contains("active")
          ? circle
          : null
        : currentCircle;
    currentIndex = currentCircle ? currentIndex : currentIndex + 1;
  });
  let nextIndex = currentIndex + 1;
  let nextCircle = circles[nextIndex];
  currentCircle.classList.remove("active");
  nextCircle.classList.add("active");
  enableDisableButtons(circles.length, currentIndex, 1);
}

function onPrev() {
  let circles = Array.from(document.querySelectorAll(".circle"));
  let progress = document.querySelector(".progress");
  let currentIndex = 0;
  let currentCircle = null;
  circles.forEach((circle) => {
    currentCircle =
      currentCircle == null
        ? circle.classList.contains("active")
          ? circle
          : null
        : currentCircle;
    currentIndex = currentCircle ? currentIndex : currentIndex + 1;
  });
  let prevIndex = currentIndex - 1;
  let prevCircle = circles[prevIndex];
  currentCircle.classList.remove("active");
  prevCircle.classList.add("active");
  enableDisableButtons(circles.length, currentIndex, -1);
}

function enableDisableButtons(circlesLength, currentIndex, direction) {
  prevButton.disabled = currentIndex + direction - 1 == -1 ? true : false;
  nextButton.disabled =
    currentIndex + direction + 1 == circlesLength ? true : false;
}

nextButton.onclick = onNext;
prevButton.onclick = onPrev;
