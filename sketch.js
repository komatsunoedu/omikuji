let result;
let count=0;
let isGameStarted=false;
let imgdaikichi,imgkichi,imgkyou,imgstart;

// Load the image.
function preload() {
  imgdaikichi = loadImage('omikuji_daikichi.png');
  imgkichi=loadImage('omikuji_kichi.png');
  imgkyou=loadImage('omikuji_kyou.png');
  imgstart=loadImage('syougatsu2_omijikuji2.png')
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
  noStroke()
}
function draw() {
  
  if(isGameStarted){
    background(240);
    if(frameCount>90){
      if(result==1){
        image(imgdaikichi,100,0,200,400);
        fill(240,0,240,abs(cos(radians((frameCount-90)/3))));
        rect(0,0,400,400);
      }else if(result>1 && result<=9){
        image(imgkichi,100,0,200,400);
        fill(240,0,240,abs(cos(radians((frameCount-90)/3))));
        rect(0,0,400,400);
      }else if(result==10){
        image(imgkyou,100,0,200,400);
        fill(240,0,240,abs(cos(radians((frameCount-90)/3))));
        rect(0,0,400,400);
      }
    }
  }
  if(radians((frameCount-90)/3)>HALF_PI){
    isGameStarted=false;
    frameCount=0;
    // スタートボタンを作成
    button = createButton('もう一度ひく'); // ボタンのラベルを設定
    button.position(width/2-60, 350); // ボタンの位置を指定
    button.mousePressed(restartGame); // ボタンが押されたときに呼び出す関数を指定
  }
}

function startGame() {
  isGameStarted = true; // ゲームを開始
  button.hide(); // ボタンを非表示
}

function restartGame() {
  isGameStarted = true; // ゲームを開始
  button.hide(); // ボタンを非表示
}
