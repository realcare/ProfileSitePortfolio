const navText = document.querySelectorAll('#header-menu ul li');
for (let i = 0; i < navText.length; i++) {
  const strNavText = navText[i].textContent;
  const splitNavText = strNavText.split('');
  navText[i].textContent = '';
  for (let j = 0; j < splitNavText.length; j++) {
    navText[i].innerHTML += '<div>' + splitNavText[j] + '</div>';
  }

  {
    const divChar = navText[i].querySelectorAll('div');
    let nowIndex = -1;
    let newTimer;

    function colorTick(arrow) {
      let arrowIndex;
      let addRemove;
      if (arrow) {
        arrowIndex = 1;
        addRemove = 'add';
      } else {
        arrowIndex = -1;
        addRemove = 'remove';
      }

      nowIndex += arrowIndex;
      if (nowIndex < 0 || nowIndex >= divChar.length) {
        complete(newTimer);
        return;
      }

      divChar[nowIndex].classList[addRemove]('colorFade');
    }

    navText[i].addEventListener('mouseenter', () => {
      complete(newTimer);
      if (--nowIndex < -1) nowIndex = -1;
      newTimer = setInterval(() => {
        colorTick(true);
      }, 50);
    });

    navText[i].addEventListener('mouseleave', () => {
      complete(newTimer);
      if (++nowIndex > divChar.length) {
        nowIndex = divChar.length;
      }
      newTimer = setInterval(() => {
        colorTick(false);
      }, 50);
    });
  }
}

function complete(timer) {
  clearInterval(timer);
  timer = null;
}

function smoothScroll(target, duration) {
  let targets = document.querySelector(target);
  let targetPosition = targets.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;

    let run = Math.easeOutCubic(
      timeElapsed,
      startPosition,
      targetPosition,
      duration
    );
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  Math.easeOutCubic = function (t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  };

  requestAnimationFrame(animation);
}

const navProfile = document.getElementById('nav-profile');
const navDiscography = document.getElementById('nav-discography');
const navPhoto = document.getElementById('nav-Photo');

navProfile.addEventListener('click', () => {
  smoothScroll('#container-profile', 1000);
});
navDiscography.addEventListener('click', () => {
  smoothScroll('#container-album', 1500);
});
navPhoto.addEventListener('click', () => {
  smoothScroll('#container-gallery', 2000);
});
window.__scrollPosition = document.documentElement.scrollTop || 0;

let tempDirect = null;

$(function () {
  $('.profile-wrap').on('mousewheel DOMMouseScroll', function (e) {
    var E = e.originalEvent;
    if (E.detail) {
      tempDirect = E.detail * -40;
    } else {
      tempDirect = E.wheelDelta;
    }
  });
});

const profileWrap = document.querySelectorAll('.profile-wrap');
for (let i = 0; i < profileWrap.length; i++) {
  profileWrap[i].addEventListener('mousewheel', () => {
    if (tempDirect > 0) {
      pageWheel('up', i);
    } else if (tempDirect < 0) {
      pageWheel('down', i);
    }
  });
}

function pageWheel(vec, index) {
  let targetPosition = null;
  switch (vec) {
    case 'up':
      if (index - 1 < 0) return;
      targetPosition = profileWrap[index - 1].getBoundingClientRect().top;
      break;
    case 'down':
      if (index + 1 >= profileWrap.length) return;
      targetPosition = profileWrap[index + 1].getBoundingClientRect().top;
      break;
    default:
      break;
  }

  console.log(index + 1 + '///////' + profileWrap.length);
  let startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;

    let run = Math.easeOutCubic(
      timeElapsed,
      startPosition,
      targetPosition,
      500
    );
    window.scrollTo(0, run);
    if (timeElapsed < 500) requestAnimationFrame(animation);
  }

  Math.easeOutCubic = function (t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  };

  requestAnimationFrame(animation);
}
