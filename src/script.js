'use strict;'

const imageUrls = [
  "https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  "/resources/download.jpeg",
  "/resources/maxresdefault.jpg"
];

let cursor = -1;

const imgContainer = $("#inner-image-container > img")[0];
const prevBtn = $("#prev");
const nextBtn = $("#next");

// *Shorthand for $(document).ready();
$(function () {
  if (imgContainer.src === '' && cursor === -1) {
    cursor++;
    imgContainer.src = imageUrls[cursor];
  }
});

prevBtn.on('click', function () {
  if (cursor === 0) {
    getImageOnIndex(cursor);
  } else if (cursor > 0) {
    cursor--;
    getImageOnIndex(cursor, {
      direction: "left"
    });
  }
});

nextBtn.on('click', function () {
  if (cursor === imageUrls.length) {
    getImageOnIndex(cursor);
  } else if (cursor < (imageUrls.length - 1)) {
    cursor++;
    getImageOnIndex(cursor, {
      direction: "right"
    });
  }
});

function getImageOnIndex(index, param) {
  if (index != undefined) {
    // console.log(imageUrls[index]);
    imgContainer.src = imageUrls[index];
  }
}
