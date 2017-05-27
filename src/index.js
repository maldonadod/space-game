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

var keyStatus = {
  Space: false,
  ArrowUp: false,
  ArrowRight: false,
  ArrowDown: false,
  ArrowLeft: false
};

document.onkeydown = e => {
  let { code } = e;
  keyStatus[code] = true;
}
document.onkeyup = e => {
  let { code } = e;
  keyStatus[code] = false;
}

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
