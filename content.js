var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'holder.js/300x200' + images[i].width + '/' + images[i].height;
}
