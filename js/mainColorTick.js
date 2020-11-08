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
}, 30);

function onTick(text, textLength, timers, className) {
  const div = text.querySelectorAll('div')[char];
  div.classList.add(className);
  char++;

  if (char == textLength.length) {
    complete(timers);
    return;
  }
}
let newTimer;
let nowIndex = -1;
function mainColorTick(arrow) {
  const divs = [...mainText.querySelectorAll('div')];
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
  if (nowIndex < 0 || nowIndex >= divs.length) {
    complete(newTimer);
    return;
  }

  divs[nowIndex].classList[addRemove]('mainTextFade');
}
mainText.addEventListener('mouseenter', () => {
  complete(newTimer);
  if (--nowIndex < -1) nowIndex = -1;
  newTimer = setInterval(() => {
    mainColorTick(true);
  }, 50);
});

mainText.addEventListener('mouseleave', () => {
  complete(newTimer);
  if (++nowIndex > splitMainText.length) {
    nowIndex = splitMainText.length;
  }
  newTimer = setInterval(() => {
    mainColorTick(false);
  }, 50);
});

function complete(timer) {
  clearInterval(timer);
  timer = null;
}
