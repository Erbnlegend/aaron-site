function hover(data) {
  var id = data;
  var circle = document.getElementById(id).children;
    circle[0].style.stroke = 'transparent';
    circle[1].style.stroke = 'transparent';
    circle[2].style.fontSize = '44px';
    circle[3].style.fontSize = '36px';
}

function out(data) {
  var id = data;
  var circle = document.getElementById(id).children;
    circle[0].style.stroke = 'rgb(0, 170, 255)';
    circle[1].style.stroke = 'rgba(100,100,100, .2)';
    circle[2].style.fontSize = '36px';
    circle[3].style.fontSize = '26px';
}
