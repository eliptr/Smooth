var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var hide = document.getElementById('ani');
var done = document.getElementById('done');

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
  localStorage.pika1ls = pika1;
  localStorage.bulb1ls = bulb1;
  localStorage.char1ls = char1;
  localStorage.squi1ls = squi1;
}

function onResume() {
    test()
}

var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

var type;

var basic;

var work;
var ab = ["25 crunches", "20 side crunches", "20 reverse crunchies", "30 sec flutter kicks"];
var push = ["20 push ups", "12 close-grip push ups", "12 cross-body push ups"];
var bar = ["8 reverse pull ups", "12 bar crunchies", "8 dips"];
var whole = ["45 sec wall-handstand", "30 sec plank", "20 v-planks"];

var aniheight;

var downtest;

var pika1;
var bulb1;
var char1;
var squi1;

var base = new Image();

base.src = "main4.png";

function test() {
  console.log("steady");

  if (localStorage.typels) {
    type = Number(localStorage.typels);
  } else {
    type = Math.floor(Math.random() * 5) + 1;
  }
  console.log(type);
  if (localStorage.pika1ls) {
    pika1 = Number(localStorage.pika1ls);
    bulb1 = Number(localStorage.bulb1ls);
    char1 = Number(localStorage.char1ls);
    squi1 = Number(localStorage.squi1ls);
  } else {
    pika1 = 0;
    bulb1 = 0;
    char1 = 0;
    squi1 = 0;
  }

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

  if (document.getElementById('done').offsetHeight === 26 && downtest === true) {
    document.getElementById('done').style.height = 26.3 + "px";
    document.getElementById('change').style.top = 1000 + "px";
    document.getElementById('showdone').style.top = 1000 + "px";
  }

  if (document.getElementById('done').offsetHeight === 26 && downtest === false) {
    document.getElementById('done').style.height = 0 + "px";
    document.getElementById('change').style.top = 800 + "px";
    document.getElementById('showdone').style.top = 174.7 + "px";
  }

  ctx.font = "300 65px Roboto";
  ctx.fillStyle = "#2B2B28";
  ctx.textAlign = "center";
  ctx.fillText(basic, 540, 568);

  ctx.font = "lighter 55px Roboto";
  ctx.fillStyle = "#2B2B28";
  ctx.textAlign = "center";
  ctx.fillText(work, 540, 632);

  ctx.font = "lighter 53px Roboto";
  ctx.fillStyle = "#E3B04B";
  ctx.textAlign = "center";
  ctx.fillText(pika1, 1583, 360);
  ctx.fillText(bulb1, 1583, 478);
  ctx.fillText(char1, 1583, 606);
  ctx.fillText(squi1, 1583, 736);


  requestAnimationFrame(draw, 10);
}

function typeTest() {
  if (type === 1) {
    work = whole[ransel(whole.length)];
    basic = "Pikachu";
  }
  if (type === 2) {
    work = ab[ransel(ab.length)];
    basic = "Bulbasaur";
  }
  if (type === 3) {
    work = bar[ransel(bar.length)];
    basic = "Charmander";
  }
  if (type === 4) {
    work = push[ransel(push.length)];
    basic = "Squirtle";
  }
  if (type === 5) {
    work = "fdbg";
    basic = pixelRatio;
  }

  localStorage.typels = type;
}

function change() {
  document.querySelector('.ani').classList.remove('grow');
  document.querySelector('.ani').offsetWidth = document.querySelector('.ani').offsetWidth;
  document.querySelector('.ani').classList.add('grow');

}


function ransel(numb) {
  return Math.floor(Math.random() * numb);
}

function showdonebt() {
  console.log("almost done");
  downtest = true;
  document.querySelector('.done').classList.remove('donedownclass');
  document.querySelector('.done').classList.remove('doneupclass');
  document.querySelector('.done').offsetWidth = document.querySelector('.done').offsetWidth;
  document.querySelector('.done').classList.add('donedownclass');
}

function downupbt() {
  downtest = false;
  document.querySelector('.done').classList.remove('doneupclass');
  document.querySelector('.done').classList.remove('donedownclass');
  document.querySelector('.done').offsetWidth = document.querySelector('.done').offsetWidth;
  document.querySelector('.done').classList.add('doneupclass');

  if (type === 1) {
    pika1 = pika1 + 1;
  }
  if (type === 2) {
    bulb1 += 1;
  }
  if (type === 3) {
    char1 += 1;
  }
  if (type === 4) {
    squi1 += 1;
  }
  if (type === 5) {
    work = "pie";
  }
}

// document.getElementById('change').addEventListener('click', function () {
//   document.querySelector('.ani').classList.remove('grow');
//   document.querySelector('.ani').offsetWidth = document.querySelector('.ani').offsetWidth;
//   document.querySelector('.ani').classList.add('grow');
// });
