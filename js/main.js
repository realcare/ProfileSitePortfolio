const mainText = document.querySelector('#main-text');
const strMainText = mainText.textContent;
const splitMainText = strMainText.split('');
mainText.textContent = '';
for (let i = 0; i < splitMainText.length; i++) {
  mainText.innerHTML += '<div>' + splitMainText[i] + '</div>';
}

let char = 0;
let MainTextTimer = setInterval(() => {
  onTick(mainText, splitMainText, MainTextTimer, 'fade');
}, 50);
console.log(mainText);
function onTick(text, textLength, timers, className) {
  const div = text.querySelectorAll('div')[char];
  div.classList.add(className);
  char++;

  if (char == textLength.length) {
    complete(timers);
    return;
  }
}

function complete(timer) {
  clearInterval(timer);
  timer = null;
}

const navText = document.querySelectorAll('#header-menu ul li');
for (let i = 0; i < navText.length; i++) {
  const strNavText = navText[i].textContent;
  const splitNavText = strNavText.split('');
  navText[i].textContent = '';
  for (let j = 0; j < splitNavText.length; j++) {
    navText[i].innerHTML += '<div>' + splitNavText[j] + '</div>';
  }
  navText[i].addEventListener('mouseover', () => {
    const navTextTimer = setInterval(colorTick, 50);
    let chars = 0;
    function colorTick() {
      const colorDiv = navText[i].querySelectorAll('div')[chars];
      colorDiv.classList.add('colorFade');
      chars++;
      if (chars == splitNavText.length) {
        complete(navTextTimer);
        return;
      }
    }
  }),
    navText[i].addEventListener('mouseleave', () => {
      const navTextTimeroff = setInterval(removeColorTick, 50);
      let divLength = navText[i].querySelectorAll('div').length;
      function removeColorTick() {
        const offColorDiv = navText[i].querySelectorAll('div')[divLength];

        offColorDiv.classList.remove('colorFade');
        divLength--;
        if (divLength === 0) {
          complete(navTextTimeroff);
          return;
        }
      }
    });
}
