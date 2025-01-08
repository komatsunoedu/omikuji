let result;
let count=0;
let isGameStarted=false;
let imgdaikichi,imgkichi,imgkyou,imgstart;

// Load the image.
function preload() {
  imgdaikichi = loadImage('https://assets.editor.p5js.org/674d05aeed4a5598d1f03b61/0c1b40c8-9f2b-4b4a-a76a-69f6d074e5a8.png');
  imgkichi=loadImage('https://assets.editor.p5js.org/674d05aeed4a5598d1f03b61/39ff4a27-a8ca-4d40-ab72-d1eaa35b1693.png');
  imgkyou=loadImage('https://assets.editor.p5js.org/674d05aeed4a5598d1f03b61/18804cad-c713-4e0d-baa2-219c676bd059.png');
  imgstart=loadImage('https://assets.editor.p5js.org/674d05aeed4a5598d1f03b61/b2f7d7ad-32f3-45a8-a371-148b24402c60.png')
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  background(240);
  // スタートボタンを作成
  button = createButton('おみくじを引く'); // ボタンのラベルを設定
  button.position(width/2-60, 350); // ボタンの位置を指定
  button.mousePressed(startGame); // ボタンが押されたときに呼び出す関数を指定
  image(imgstart,100,0,200,300);
  
  result=floor(random(1,11));
  //textSize(30);  
  
}
function draw() {
  
  if(isGameStarted){
    background(240);
    if(result==1){
      image(imgdaikichi,100,0,200,400);
      fill(240,0,240,abs(cos(radians(frameCount/3))));
      rect(0,0,400,400);
    }else if(result>1 && result<=9){
      image(imgkichi,100,0,200,400);
      fill(240,0,240,abs(cos(radians(frameCount/3))));
      rect(0,0,400,400);
    }else if(result==10){
      image(imgkyou,100,0,200,400);
      fill(240,0,240,abs(cos(radians(frameCount/3))));
      rect(0,0,400,400);
    }
  }
  if(radians(frameCount/3)>HALF_PI){
    noLoop();
  }
}

function startGame() {
  isGameStarted = true; // ゲームを開始
  button.hide(); // ボタンを非表示
}
