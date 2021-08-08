
// Create canvas variable
var canvas = new fabric.Canvas('my_Canvas');

//Set initial positions for ball and hole images.ball_y = 0;
ball_x = 0;
ball_y = 0;
hole_x = 1000;
hole_y = 450;

window.addEventListener("keydown", my_keydown);

new_image();

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL('golf-h.png', function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top: hole_y,
			left: hole_x
		});
	
		canvas.add(hole_obj);
		
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function (Img) {
	

		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({

			top: ball_y,
			left: ball_x
		});
		canvas.add(ball_obj);
			
	})
	}

function my_keydown(e) {
	keyPressed = e.keyCode;
	
	// Check the coordinates of the ball and hole images to finish the game. 
	//And id coordinates matches them remove ball image,
	canvas.remove(ball_obj);

	if ((ball_x == hole_x) && (ball_y == hole_y)) {
		document.getElementById("hd3").innerHTML = "You have completed this round of golf!!!";
		document.getElementById("myCanvas").style.borderColor = "red";

	}
	//display "GAME OVER!!!" 
	//and make canvas border 'red'. */

	else {
		if (keyPressed == '38') {
			up();
			
		}
		if (keyPressed == '40') {
			down();
			
		}
		if (keyPressed == '37') {
			left();
			
		}
		if (keyPressed == '39') {
			right();
		
		}
	}
}
	function up() {
		// Write a code to move ball upward.
		if (ball_y >= 0) {
			ball_y = ball_y - 10;
			canvas.remove(ball_obj);
			new_image();
			
		}
	}

	function down() {
		// Write a code to move ball downward.
		if (ball_y <=500) {
			ball_y = ball_y + 10;
			canvas.remove(ball_obj);
			new_image();
			
		}
	}
function left() {
	if (ball_x > 5) {
		// Write a code to move ball left side.
		if (ball_x >= 0) {
			ball_x = ball_x - 10;
			canvas.remove(ball_obj);
			new_image();
			
		}
	}
}

	function right() {
		if (ball_x <= 1100) {
			// Write a code to move ball right side.
			ball_x = ball_x + 10;
			canvas.remove(ball_obj);
			new_image();
			
		}
	}

