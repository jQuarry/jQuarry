
(function genBoard(n) {
	var place = $("#board");
	place.append('<table id="boardtable" border="1"></table>');
	place = $('#boardtable');
	for(var i = 0; i < n; i++) {
		var row = $("<tr></tr>");
		place.append(row);
		for(var j = 0; j < n; j++) {
			row.append("<td>cell (" + i + ", " + j +")</td>");
		}
	}
})(4);

