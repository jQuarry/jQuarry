
var Game = {};

Game.launch = function() {
    var version = 1.0;
    var date = new Date();


    // choose a random subtitle for the page
    var subs = [
    'The #1 Javascript-Powered Web Technology Selection Game!'];
    Game.subtitle = subs[Math.floor(Math.random() * subs.length)];

};

Game.launch();

$('document').ready(function() {
    $('#subtitle').html(Game.subtitle);
});