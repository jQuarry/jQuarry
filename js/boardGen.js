
goodies = ["asp.png", "django.png", "jquery.gif", "php.jpg",
	"ruby-on-rails.png", "node-js.js.js.png", "javascript-logo.png",
	"html5.png", "css3.png"];
baddies = ["404.jpg", "computer-hacker.jpg", "doge.png"]

$('#mybutton69').on('click', function genBoard() {
	var n = 4;
	var place = $("#board");
	place.empty();
	place.append('<table id="boardtable" border="1"></table>');
	place = $('#boardtable');
	goodies_on_column = [];
	for ( var i = 0; i < n ; i++ ) {
		goodies_on_column[i] = 0;
	}
	for(var i = 0; i < n; i++) {
		var row = $("<tr></tr>");
		place.append(row);
		var goodies_this_row = 0;
		for(var j = 0; j < n; j++) {
			var good_or_bad_square = Math.floor(Math.random() * 10);
			if ( good_or_bad_square > 3 ){
				var rand = Math.floor(Math.random() * goodies.length);
				row.append("<td><img src='img/mineCRAFT.png' width=150 height=150/></td>");
				//row.append("<td><img src='img/" + goodies[rand] +"' width=150 height=150/></td>");
				goodies_this_row++;
				goodies_on_column[j] = goodies_on_column[j]+1;
			} else {
				var rand = Math.floor(Math.random() * baddies.length);
				row.append("<td><img src='img/mineCRAFT.png' width=150 height=150/></td>");
				//row.append("<td><img src='img/" + baddies[rand] +"' width=150 height=150/></td>");
			}
			if ( j == n-1 ) {
				row.append("<td>"+goodies_this_row+"</td>");
			}
		}
	}
	for ( var i = 0 ; i < n ; i++ ) {
		place.append("<td>"+goodies_on_column[i]+"</td>");
	}
});

