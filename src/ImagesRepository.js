var ImagesRepository = (function() {

  var background = new Image();
  var ship = new Image();
  background.src = "/assets/img/bg.png";
  ship.src = "/assets/img/ship.png";
  return {
    background
    ,ship
  }
})();
