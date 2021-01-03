let video;
let pics = [];
var button;
var idx = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(160,120);
    button = createButton('shoot pic');
    
  createCanvas(160,120);
  background(255);
  button.mousePressed(shoot);
  
}
for(i=0;i<5;i++){
function shoot() {
  let img = video.get(0,0,160,120);
  pics.push(img);
}

function draw() {
  for(var i = 0; i < pics.length; i++) {
     image(pics[i], 0, 0);
  }
}
}