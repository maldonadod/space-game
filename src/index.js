window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame   ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(callback, element){
				window.setTimeout(callback, 1000 / 60);
			};
})();

Engine(Background);

function Engine(Background) {

  Background.init(0,0);

  function start() {
	  requestAnimFrame(start);
	  Background.draw();
  }
	start();
}
