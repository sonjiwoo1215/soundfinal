var wave;
var button;
var playing = false;


function setup(){
  createCanvas(displayWidth,displayHeight);
  wave = new p5.Oscillator();
  wave.setType('sine');//파형 설정
   //주파수
   //진폭

  
  
  button = createButton('도');
  button.size(90,300);
  button.mousePressed(toggle);
  
  button = createButton('레');
  button.size(90,300);
  button.mousePressed(toggle2);
  
  button = createButton('미');
  button.size(90,300);
  button.mousePressed(toggle3);
  
  button = createButton('파');
  button.size(90,300);
  button.mousePressed(toggle4);
  
  button = createButton('솔');
  button.size(90,300);
  button.mousePressed(toggle5);
  
  button = createButton('라');
  button.size(90,300);
  button.mousePressed(toggle6);
  
  button = createButton('시');
  button.size(90,300);
  button.mousePressed(toggle7);
  
  button = createButton('도2');
  button.size(90,300);
  button.mousePressed(toggle8);
  
  button = createButton('레2');
  button.size(90,300);
  button.mousePressed(toggle9);
  
  button = createButton('미2');
  button.size(90,300);
  button.mousePressed(toggle10);
  
 
  //slider = createSlider(100,1200,440);
  

}

function draw(){
  //wave.freq(slider.value());

  clear();
  let display = touches.length + 'touches';
  text(display,5,10);

}

function toggle(){
  if(!playing){
    wave.start();
    wave.amp(1);
    wave.freq(261);
   
    
    
    
  playing = true;
  }else{
    wave.stop();
    wave.amp(0);
    playing = false;
  }}

function toggle2(){
  if(!playing){
    
    wave.start();
    wave.amp(1);
    wave.freq(293);
    
    
  playing = true;
  }else{
    wave.stop();
    wave.amp(0);
    playing = false;
  }}

function toggle3(){
  if(!playing){
    
    wave.start();
    wave.amp(1);
    wave.freq(329);
    
    
  playing = true;
  }else{
    wave.stop();
    wave.amp(0);
    playing = false;
  }}

function toggle4(){
  if(!playing){
    
    wave.start();
    wave.amp(1);
    wave.freq(349);
    
    
  playing = true;
  }else{
    wave.stop();
    wave.amp(0);
    playing = false;
  }}

function toggle5(){
  if(!playing){
    
    wave.start();
    wave.amp(1);
    wave.freq(391);
    
    
  playing = true;
  }else{
    wave.stop();
    wave.amp(0);
    playing = false;
  }}

function toggle6(){
  if(!playing){
    
    wave.start();
    wave.amp(1);
    wave.freq(440);
    
    
  playing = true;
  }else{
    wave.stop();
    wave.amp(0);
    playing = false;
  }}

function toggle7(){
  if(!playing){
    
    wave.start();
    wave.amp(1);
    wave.freq(493);
    
    
  playing = true;
  }else{
    wave.stop();
    wave.amp(0);
    playing = false;
  }}

function toggle8(){
  if(!playing){
    
    wave.start();
    wave.amp(1);
    wave.freq(523);
    
    
  playing = true;
  }else{
    wave.stop();
    wave.amp(0);
    playing = false;
  }}

function toggle9(){
  if(!playing){
    
    wave.start();
    wave.amp(1);
    wave.freq(587);
    
    
  playing = true;
  }else{
    wave.stop();
    wave.amp(0);
    playing = false;
  }}

function toggle10(){
  if(!playing){
    
    wave.start();
    wave.amp(1);
    wave.freq(659);
    
    
  playing = true;
  }else{
    wave.stop();
    wave.amp(0);
    playing = false;
  }}

function touchStarted(){
  
  background(255,255,255);
  text(touches.length,200,200);
  text(touches[0].x,200,220);
  text(touches[0].y,200,240);
  text(touches[1].x,200,260);
  text(touches[1].y,200,280);
  
}