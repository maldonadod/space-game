import { Background } from './Background'
import { Ship } from './Ship'

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
  Ship.init();

  function start() {
	  requestAnimFrame(start);
	  Background.draw();
		Ship.draw();
  }
	start();
}
