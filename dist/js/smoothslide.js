// smooth scrolling function
const smoothScroll = (target, duration) => {
  var target = document.querySelector(target);
  var targetPos = target.getBoundingClientRect().top;
  var startPos = window.pageYOffset;
  // var distance = targetPos - startPos;
  var startTime = null;

  // function that compute distance and invoke ease function
  const animation = currentTime => {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPos, targetPos, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  // ease function
  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  // invoke requestAnimationFrame
  requestAnimationFrame(animation);
};

// add smooth scroll on event of given element
const addSmoothScroll = (element, target) => {
  element.addEventListener("click", function() {
    smoothScroll(target, 1000);
  });
};

// add event listener to about button
addSmoothScroll(document.querySelector("#aboutBtn"), "#home");

// add event listener to home nav link
addSmoothScroll(document.querySelector("#homeLink"), "#header-home");

// add event listener to about nav link
addSmoothScroll(document.querySelector("#aboutLink"), "#home");

// add event listener to work nav link
addSmoothScroll(document.querySelector("#workLink"), "#work-a");

// add event listener to contact gallery link within span
addSmoothScroll(document.querySelector("#galleryLink"), "#work-a");

// add event listener to contact nav link
addSmoothScroll(document.querySelector("#contactLink"), "#contact-a");
