var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var hide = document.getElementById('ani');

function onload() {
  document.addEventListener("deviceready", onDeviceReady, false);
  console.log("ok so far");
  test()
}

function onDeviceReady() {
  console.log("ready");
  document.addEventListener("pause", onPause, false);
  document.addEventListener("resume", onResume, false);
  test()
}

function onPause() {
  console.log("stop...wait a minute");
  localStorage.typels = type;
}

function onResume() {
    test()
}

var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

var type;

var basic;

var aniheight;


var base = new Image();

base.src = "main3.png";

function test() {
  console.log("steady");

  if (localStorage.typels) {
    type = Number(localStorage.typels);
  } else {
    type = Math.floor(Math.random() * 5) + 1;
  }
  console.log(type);

  windowWidth = 836.2;
  windowHeight = window.innerHeight;
  pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device


  typeTest()
  draw()
}

function draw() {

  // fixed canvas resolution
  canvas.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvas.height = windowHeight * pixelRatio;
  canvas.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvas.style.height = windowHeight + 'px';

  ctx.drawImage(base, 0, 0);

  if (hide.offsetHeight === 99) {
    type = Math.floor(Math.random() * 5) + 1;
    typeTest()
  }

  ctx.font = "lighter 65px Roboto";
  ctx.textAlign = "center";
  ctx.fillText(basic, 540, 568);


  requestAnimationFrame(draw, 10);
}

function typeTest() {
  if (type === 1) {
    basic = pixelRatio;
  }
  if (type === 2) {
    basic = "Garden";
  }
  if (type === 3) {
    basic = "Crafts";
  }
  if (type === 4) {
    basic = "Photography";
  }
  if (type === 5) {
    basic = "Drawing";
  }

  localStorage.typels = type;
}

function change() {
  document.querySelector('.ani').classList.remove('grow');
  document.querySelector('.ani').offsetWidth = document.querySelector('.ani').offsetWidth;
  document.querySelector('.ani').classList.add('grow');

}

function chan2() {
  type = Math.floor(Math.random() * 5) + 1;
  typeTest()
}



// document.getElementById('change').addEventListener('click', function () {
//   document.querySelector('.ani').classList.remove('grow');
//   document.querySelector('.ani').offsetWidth = document.querySelector('.ani').offsetWidth;
//   document.querySelector('.ani').classList.add('grow');
// });
