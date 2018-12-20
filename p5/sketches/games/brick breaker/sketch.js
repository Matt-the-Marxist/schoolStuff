let bricks = [];
let num = 84;
let speed = 7;
let score;
let lives;


function setup() {
	createCanvas(480,320);
	paddle = new Paddle;
	puck = new Puck;
	for(let i = 0; i < num; i++){
		bricks[i] = new Brick(i);
	}
	textSize(12);
	score = 0;
	lives = 3;
}

function draw() {
	background(0);
	paddle.show();
	puck.show();
	puck.checkBricks();
	for(let i = 0; i<num; i++){
		bricks[i].show();
	}
	puck.checkPaddle();
	fill(255);
	text(['Score:'+score],5,height-10);
	text(['lives:'+lives],width-40,height-10);
	if(lives <= 0){
		/*for(let i = 0; i<num; i++){
			bricks[i].x = 0;
			bricks[i].y = 0;
			bricks[i].width = 0;
			bricks[i].gap  = 0;;
		}*/
		paddle.y = -100;
		background(100);
		fill(255);
		textSize(75);
		text('GAME OVER',10,height/2)
		textSize(20);
		text(['Score:'+score],width/2-50,height/2+25);
	}
}

function keyReleased(){
	if(keyCode == 32){
		return false;
	}
	paddle.move(0);
	
}

function keyPressed(){
	if (keyCode === RIGHT_ARROW){
		paddle.move(speed);			
	} else if (keyCode === LEFT_ARROW){
		paddle.move(-speed);
	} else if (keyCode == 32){
		if(puck.onPaddle){
			puck.shoot();
			puck.onPaddle = false;
		}
	}
	return false;
}