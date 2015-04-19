
goodies = ["asp.png", "django.png", "jquery.gif", "php.png",
	"ruby-on-rails.png", "node-js.png", "javascript-logo.png",
	"html5.png", "css3.png"];
baddies = ["404.jpg", "computer-hacker.png", "doge.png", "nyan.png", "wah.png"];
values = [1, 1, 4, 1, 3, 2, 3, 2, 2];

cell = [];

done = false;

numGoodies = 0;
goodFound = 0;

points = 0;
level = 1;

$(goodies).each(function() {
	$('<img/>')[0].src = 'img/' + this;
});
$(baddies).each(function() {
	$('<img/>')[0].src = 'img/' + this;
});

function reminderMode() {
	
}

function createBoard() {
	$('#level').text(level);
	$('#points').text(points);
	done = false;
	cell = [];
	numGoodies=0;
	goodFound=0;
	$('#status').text('');
	var n = 4+level-1;
	var place = $("#board");
	place.empty();
	place.append('<table id="boardtable" border="1"></table>');
	place = $('#boardtable');
	goodies_on_column = [];
	values_on_column = [];
	for ( var i = 0; i < n ; i++ ) {
		goodies_on_column[i] = 0;
		values_on_column[i] = 0;
	}
	for(var i = 0; i < n; i++) {
		var row = $("<tr></tr>");
		place.append(row);
		var goodies_this_row = 0;
		var value_this_row = 0;
		for(var j = 0; j < n; j++) {
			var good_or_bad_square = Math.floor(Math.random() * 10);
			if ( good_or_bad_square > 3 ){
				var rand = Math.floor(Math.random() * goodies.length);
				row.append("<td><img class='img' id='"+(i*n+j)+"' src='img/mineCRAFT.png' width=150 height=150/></td>");
				goodies_this_row++;
				value_this_row += values[rand];
				goodies_on_column[j] = goodies_on_column[j]+1;
				values_on_column[j] += values[rand];
				numGoodies++;
				cell.push([i, j, 1, rand]);
			} else {
				var rand = Math.floor(Math.random() * baddies.length);
				row.append("<td><img class='img' id='"+(i*n+j)+"' src='img/mineCRAFT.png' width=150 height=150/></td>");
				cell.push([i, j, 0, rand]);
			}
			if ( j == n-1 ) {
				row.append("<td>"+value_this_row+"<br/><img class='img' src='img/stop.png' width=25 height=25/>"+(n-goodies_this_row)+"</td>");
			}
		}
	}
	for ( var i = 0 ; i < n ; i++ ) {
		place.append("<td>"+values_on_column[i]+"<br/><img class='img' src='img/stop.png' width=25 height=25/>"+(n-goodies_on_column[i])+"</td>");
	}

	$('.img').on("click", function() {
		if(!done) {
			var win = false;
			if(cell[this.id][2] == 0) {
				done=true;
				$('#status').text('Game over');
				$('#status').css('color', 'red');
				new Audio('assets/doh.mp3').play();
			} else {
				if($(this).attr('src') == 'img/mineCRAFT.png') {
					goodFound++;
					points += values[cell[this.id][3]];
					$('#points').text(points);
				}
				if(goodFound == numGoodies) {
					done=true;
					$('#status').text('You Win!');
					$('#status').css('color', 'green');
					level++;
					$(this).attr('src', 'img/' + (cell[this.id][2]==1?goodies[cell[this.id][3]]:baddies[cell[this.id][3]]));
					new Audio('assets/applause.mp3').play();
					win = true;
				}
			}
			$(this).attr('src', 'img/' + (cell[this.id][2]==1?goodies[cell[this.id][3]]:baddies[cell[this.id][3]]));
			if ( cell[this.id][2]==1 ) {
				$(this).attr('title', values[cell[this.id][3]]);
			}
			if(win) {
				setTimeout(function(){
					createBoard();
				}, 8000);
			}
		}
	});
}

$('#mybutton69').on('click', function() {
	points=0;
	level=1;

	createBoard();
});

function sleep(milliseconds) { // lmao
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

