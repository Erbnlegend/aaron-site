window.onload = setupNav;
var nav = document.getElementById('nav');
var navButton = document.getElementById('navButton');
var container = document.getElementById('container');
var social = document.getElementById('social');


function setupNav() {
  var w = window.innerWidth;
  if(w <= 767){
    container.className = '';
  }
  navToggle();
}

function navToggle() {
  var w = window.innerWidth;
  container.classList.toggle("show");
  if(container.className == 'show') {
    container.style.marginLeft = '-400%';
    social.style.marginLeft = '-400%';
    nav.style.backgroundColor = 'transparent';
    navButton.style.color = 'rgb(0,0,0)';
  }
  if(container.className == 'show' && w <= 767) {
    nav.style.backgroundColor = 'transparent';
    navButton.style.color = 'rgb(0,0,0)';
  }
  if(container.className == '') {
    container.style.marginLeft = '0';
    social.style.marginLeft = '0';
    nav.style.backgroundColor = 'rgba(0,0,0,.7)';
    navButton.style.color = 'rgb(255,255,255)';
  }
  if(container.className == '' && w <= 767) {
    nav.style.backgroundColor = 'rgba(0,0,0,.7)';
  }
};

function mobNavToggle() {
  var w = window.innerWidth;
    container.classList.toggle("show");
    if(container.className == 'show' && w <= 767) {
      container.style.marginLeft = '-400%';
      social.style.marginLeft = '-400%';
      nav.style.backgroundColor = 'transparent';

    }
    if(container.className == '' && w <= 767) {
      container.style.marginLeft = '0';
      social.style.marginLeft = '0';
      nav.style.backgroundColor = 'rgba(0,0,0,.7)';
    }
};
