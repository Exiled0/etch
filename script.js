var numPiece = 16;
var pieceHeight = 400/numPiece;
var pieceWidth = 500/numPiece;

$(document).ready(function() {
	/*something with the divs/for loop is adding spcae for next line...
	  Update - set board font-size to 0 */
	for(i=1; i<=numPiece * numPiece; i++) {
		$('#board').append("<div class='piece'></div>");
	}
	$(".piece").css("height", pieceHeight + "px");
	$(".piece").css("width", pieceWidth + "px");
});