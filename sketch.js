
let song;
let startSong;
let amp;
let volHistory = [];


function setup() {
  createCanvas(400, 400);
  song = loadSound("./sounds/song2.mp3", preload)
  startSong = createButton('Start');
  startSong.mousePressed( () => {
    if(!song.isPlaying()){
      song.play()
      song.setVolume(0.2)
      startSong.html('Stop')
    }else{
      song.stop()
      startSong.html('Start')
    }
    
  })
  amp = new p5.Amplitude();
}
preload = () => console.log('load')
function draw() {
  background(0)
  vol = amp.getLevel()
  volHistory.push(vol)
  stroke(255)
  noFill()
  beginShape();
  for(let i = 0; i < volHistory.length; i++){
    let y = map(volHistory[i], 0, 1, height / 2, 0); 
    vertex(i,y)
  }
  endShape();

  if(volHistory.length > width - 50){
    volHistory.splice(0,1)
  }

  stroke(255, 0, 0)
  line(volHistory.length, 0, volHistory.length, width)
}
