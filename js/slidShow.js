let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://www.smbc-card.com/nyukai/magazine/tabisapo/choose/img/world_heritage_img_main.jpg",
"https://www.kamometour.co.jp/wp/wp-content/uploads/2016/09/0915_13.jpg",
"https://tabizine.jp/wp-content/uploads/2017/06/136502-02.jpg"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
