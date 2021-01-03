var snapshots=[];
var video;
function setup() 
{
  
  video = createCapture(VIDEO);
  video.size(160, 120);
 
 
 const button1=createButton('shoot pic');
 createCanvas(500,120);
  background(255);
     button1.mousePressed(shoot);
  const button = document.getElementById('submit');
  button.addEventListener('click', async event => {
    const loc = document.getElementById('loc').value;
    const desc = document.getElementById('desc').value;

    video.loadPixels();
    const snap1 = snapshots[0].canvas.toDataURL();
    const snap2 = snapshots[1].canvas.toDataURL();
    const snap3 = snapshots[2].canvas.toDataURL();
    const snap4 = snapshots[3].canvas.toDataURL();
    const snap5 = snapshots[4].canvas.toDataURL();
    const data = {  loc,desc, snap1,snap2,snap3,snap4,snap5 };
   
    localStorage.setItem("imgData", JSON.stringify(data));
  });
}
  function shoot(){
     snapshots.push(video.get());
  }


  function draw(){
    var w=100;
    var h=120;
    var x=0;
    var y=0;
    for(var i=0;i<snapshots.length;i++){
    image(snapshots[i],x,y,w,h);
    x=x+w;
    }
  }
