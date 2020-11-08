const twlve = document.getElementById('twlve');
const fifteen = document.getElementById('fifteen');
const seventeen = document.getElementById('seventeen');
const eighteen = document.getElementById('eighteen');
const albumText = document.getElementById('album-songlist');
const list = albumText.querySelectorAll('ul li a');
const album = document.getElementById('album-info-wrap');

function SongListsetting(songList, youtube) {
  for (let i = 0; i < list.length; i++) {
    if (i < songList.length) {
      list[i].textContent = songList[i];
      list[i].href = youtube[i];
    } else {
      list[i].textContent = '';
      list[i].href = '';
    }
  }
}

twlve.addEventListener('click', () => {
  const albumImg = document.getElementById('album-img');

  if (album.style.right === '0%') {
    album.style.right = '-110%';

    // albumText.style.display = 'block';
  } else {
    album.style.right = '0%';
    albumImg.style.transform = `rotate(360deg)`;
    albumImg.style.transition = `all 2.5s ease-out`;
    albumImg.src = twelveYear.imgsrc;
    SongListsetting(twelveYear.list, twelveYear.youtube);
  }
  setTimeout(() => {
    if (album.style.right == '-110%') {
      album.style.right = '0%';
      if (albumImg.style.transform === 'rotate(360deg)') {
        albumImg.style.transform = 'rotate(0deg)';
      } else {
        albumImg.style.transform = 'rotate(360deg)';
      }
      albumImg.src = twelveYear.imgsrc;
      SongListsetting(twelveYear.list, twelveYear.youtube);
    }
  }, 1000);
});

fifteen.addEventListener('click', () => {
  const albumImg = document.getElementById('album-img');
  if (album.style.right === '0%') {
    album.style.right = '-110%';
    // albumText.style.display = 'block';
  } else {
    album.style.right = '0%';
    albumImg.style.transform = `rotate(360deg)`;
    albumImg.style.transition = `all 2.5s ease-out`;
    albumImg.src = fifteenYear.imgsrc;
    SongListsetting(fifteenYear.list, fifteenYear.youtube);
  }
  setTimeout(() => {
    if (album.style.right == '-110%') {
      album.style.right = '0%';
      if (albumImg.style.transform === 'rotate(360deg)') {
        albumImg.style.transform = 'rotate(0deg)';
      } else {
        albumImg.style.transform = 'rotate(360deg)';
      }
      albumImg.src = fifteenYear.imgsrc;
      SongListsetting(fifteenYear.list, fifteenYear.youtube);
    }
  }, 1000);
});

seventeen.addEventListener('click', () => {
  const albumImg = document.getElementById('album-img');
  if (album.style.right === '0%') {
    album.style.right = '-110%';
  } else {
    album.style.right = '0%';
    albumImg.style.transform = `rotate(360deg)`;
    albumImg.style.transition = `all 2.5s ease-out`;
    albumImg.src = seventeenYear.imgsrc;
    SongListsetting(seventeenYear.list, seventeenYear.youtube);
  }
  setTimeout(() => {
    if (album.style.right == '-110%') {
      album.style.right = '0%';
      if (albumImg.style.transform === 'rotate(360deg)') {
        albumImg.style.transform = 'rotate(0deg)';
      } else {
        albumImg.style.transform = 'rotate(360deg)';
      }
      albumImg.src = seventeenYear.imgsrc;
      SongListsetting(seventeenYear.list, seventeenYear.youtube);
    }
  }, 1000);
});

eighteen.addEventListener('click', () => {
  const albumImg = document.getElementById('album-img');
  if (album.style.right === '0%') {
    album.style.right = `-110%`;
  } else {
    album.style.right = '0%';
    albumImg.style.transform = `rotate(360deg)`;
    albumImg.style.transition = `all 2.5s ease-out`;
    albumImg.src = eighteenYear.imgsrc;
    SongListsetting(eighteenYear.list, eighteenYear.youtube);
  }
  setTimeout(() => {
    if (album.style.right == '-110%') {
      album.style.right = '0%';
      if (albumImg.style.transform === 'rotate(360deg)') {
        albumImg.style.transform = 'rotate(0deg)';
      } else {
        albumImg.style.transform = 'rotate(360deg)';
      }
      albumImg.src = eighteenYear.imgsrc;
      SongListsetting(eighteenYear.list, eighteenYear.youtube);
    }
  }, 1000);
});
