

// MOHAMED EL JELALI'S PROPERTY e-mail: mohamedeljelali.pro@gmail.com
// Getting 'Info' div in js hands
var info = document.getElementById('info');
//var titre = document.getElementById('titre');
// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
var x=0;
var y = 0;

function tellPos(p){
//	info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;
	x = p.pageX;
	y = p.pageY;
}

addEventListener('mousemove', tellPos, false);
//counter
var counter = 1;
//var t increase x by a size
var size =0;
// variable to change the style's element (taille + "px")
var sizeToString ="";

function myFunction() {
	var elm = document.getElementById('myBtn');
	var point = {x:0,y:0}; // Change to y:0 to get the top-left
	
	//recuper width et height de la fenetre du browser
	var windowHSize = document.body.clientWidth;
	var windowVSize = document.body.clientHeight;

	while (elm)
	{
    // This will get you the position relative to the absolute container,
    // which is what you need for positioning an element within it
    	if (elm.style.position == 'absolute'){
        	break;
    	}

    	point.x += elm.offsetLeft;
    	point.y += elm.offsetTop;

    	elm = elm.offsetParent;
	}

	if (counter >= 0){
	//	if (&& (point.x - 50) > 0){
			if (x < point.x){
				if ((size +100) < windowHSize){
					toTheRight();
					counter++;
				} else {
					toTheRight();
					counter++;
				}
			} else if (x > point.x) {
					toTheLeft();
					counter--;
					if (point.y < windowVSize -90){
						toTheBottom();
					} 		
			
			}
	//	}
		
		if (point.y > y) {
			toTheRight();
		} else if (point.y < y && point.x < x){
			toTheTop();
			toTheRight();
			counter++;
		} else {
			toTheTop();
		}	
	}
	document.getElementById('message').innerHTML ="counter :"+ counter + '<br/>'+  "y : "+ y +'<br/>'+ "pointy : "+ point.y +'<br/>'+ "x : "+x +'<br/>'+ "pointx : "+ point.x;
}

function toTheRight(){
	size = counter* 50;
	sizeToString = size.toString() + "px";
	document.getElementById('myBtn').style.left = sizeToString;
}

function toTheLeft(){
	size -= 50;
	sizeToString = size.toString() + "px";
	document.getElementById('myBtn').style.left = sizeToString;
}

function toTheTop(){
	size = 100*counter;
	sizeToString = size.toString() + "px";
	document.getElementById('myBtn').style.bottom = sizeToString;				
	counter++;
}

function toTheBottom(){
	size= 100*counter;
	sizeToString = size.toString() + "px";
	document.getElementById('myBtn').style.top = sizeToString;
	counter++;
}