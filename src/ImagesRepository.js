var ImagesRepository = (function() {

  var background = new Image();
  var ship = new Image();
  var bullet = new Image();
  background.src = "/assets/img/bg.png";
  ship.src = "/assets/img/spaceshipsprites.gif";
  bullet.src = "/assets/img/bullet.png";
  return {
    background
    ,ship
    ,bullet
  }
})();
