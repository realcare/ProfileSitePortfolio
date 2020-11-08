const photoMenu = document.querySelectorAll('#photo-menu ul li');
const images = document.querySelectorAll('.photo');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;
photoMenu.forEach((list) => {
  list.addEventListener('click', () => {
    photoMenu.forEach((list) => {
      list.className = '';
    });
    list.className = 'active';
    let values = list.getAttribute('data-id');
    images.forEach((photo) => {
      photo.style.display = 'none';
      if (photo.getAttribute('data-id') === values || values === 'all') {
        photo.style.display = 'block';
      }
    });
  });
});

if (images) {
  images.forEach((photo, index) => {
    photo.addEventListener('click', () => {
      let photoImg = photo.querySelector('.photoImg');
      let photoSrc = photoImg.src;
      let photoPos = photoSrc.split('/images/');
      let setNewSrc = photoPos[1];

      getLatestOpenedImg = index + 1;

      let windowBody = document.body;
      let newImgWindow = document.createElement('div');
      windowBody.appendChild(newImgWindow);
      newImgWindow.setAttribute('class', 'img-window');
      newImgWindow.setAttribute('onclick', 'closeImg()');

      let newImg = document.createElement('img');
      newImgWindow.appendChild(newImg);
      newImg.setAttribute('src', './images/' + setNewSrc);
      newImg.setAttribute('id', 'current-img');
    });
  });
}

function closeImg() {
  document.querySelector('.img-window').remove();
}
