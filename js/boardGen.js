
imgs = ["404.jpg", "asp.png", "computer-hacker.jpg", "django.png", "doge.png",
		"jquery.gif", "php.jpg", "ruby-on-rails.png"];

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
			var rand = Math.floor(Math.random() * 7);
			row.append("<td><img src='img/" + imgs[rand] +"' width=200 height=200/></td>");
		}
	}
});

