
goodies = ["asp.png", "django.png", "jquery.gif", "php.jpg", "ruby-on-rails.png"];
baddies = ["404.jpg", "computer-hacker.jpg", "doge.png"]

$('#mybutton69').on('click', function genBoard() {
	var n = 4;
	var place = $("#board");
	place.empty();
	place.append('<table id="boardtable" border="1"></table>');
	place = $('#boardtable');
	for(var i = 0; i < n; i++) {
		var row = $("<tr></tr>");
		place.append(row);
		for(var j = 0; j < n; j++) {
			var good_or_bad_square = Math.floor(Math.random() * 10);
			if ( good_or_bad_square > 3 ){
				var rand = Math.floor(Math.random() * goodies.length);
				row.append("<td><img src='img/" + goodies[rand] +"' width=200 height=200/></td>");

			} else {
				var rand = Math.floor(Math.random() * baddies.length);
				row.append("<td><img src='img/" + baddies[rand] +"' width=200 height=200/></td>");
			}
			
		}
	}
});

