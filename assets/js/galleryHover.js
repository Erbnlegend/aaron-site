function galleryHover(data) {
  var id = data;
  var img = document.getElementById(id);
  img.style.backgroundColor = 'rgba(0,0,0,.3)';

};

function galleryOut(data) {
  var id = data;
  var img = document.getElementById(id);
  img.style.backgroundColor = 'rgba(0,0,0,0)';

};
