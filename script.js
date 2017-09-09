var numPiece = 16;
var pieceHeight, pieceWidth;
var etchedRGB = 50;
var colorR;
var colorG;
var colorB;

$(document).ready(function() {
	/*something with the divs/for loop is adding space for next line...
	  Update - set board font-size to 0 */
	  reset();

	  /*$('#shake').onclick="reset()";*/
});

function reset() {
	$(".piece").remove();	//clear all pieces
	var pieceHeight = 400/numPiece; //helps with overflow
	var pieceWidth = 500/numPiece;	//but still not right
		//might have to switch from inline block to another way...

	for(i=1; i<=numPiece * numPiece; i++) {
		$('#board').append("<div class='piece'></div>");
	}
	$(".piece").css("height", pieceHeight + "px");
	$(".piece").css("width", pieceWidth + "px");

	/*Etching*/
	$(".piece").mouseenter(function() {
		var rainbowChecked = $('#rainbow').is(":checked");
		if (rainbowChecked) {
			colorR = Math.floor(Math.random() * 255);
			colorG = Math.floor(Math.random() * 255);
			colorB = Math.floor(Math.random() * 255);
			$(this).css("background-color", "rgb(" + colorR + ", " + colorG + ", " + colorB + ")" );	
		} else {
			$(this).css("background-color", "rgb(" + etchedRGB + ", " + etchedRGB + ", " + etchedRGB + ")" );
		}
	});
}

function resize() {
	var promptSize = prompt("How many pieces should be on a side? (Enter an Integer between 1 and 64)", "16");
	var newSize = parseInt(promptSize);
	if (Number.isInteger(newSize)) {
		if (0 < newSize && newSize <= 64) {
			numPiece = newSize;
			reset();
		} else {
			numPiece = 16;
			reset();
		}
	} 
}
