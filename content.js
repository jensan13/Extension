var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placehold.it/350x150' + images[i].width + '/' + images[i].height;
}