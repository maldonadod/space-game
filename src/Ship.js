var Ship = Object.create(Drawable);
Object.assign(Ship, {
  speed: 6,
  canvas: document.getElementById('ship'),
  context: document.getElementById('ship').getContext('2d'),
  init: function() {

    let { height, width } = this.canvas;
    this.x = width / 2;
    this.y = height - 50;
  },
  draw: function() {
    let { ship } = ImagesRepository;
    let { height: shiph, width: shipw } = ship;
    let { x, y, speed } = this;
    let { height, width } = this.canvas;

    this.context.clearRect(0, 0, width, height);

    if (keyStatus['ArrowLeft']) {
      this.x -= speed;
    }
    if (keyStatus['ArrowRight']) {
      this.x += speed;
    }
    if (keyStatus['ArrowUp']) {
      this.y -= speed;
    }
    if (keyStatus['ArrowDown']) {
      this.y += speed;
    }

    this.context.drawImage(ship, this.x, this.y);
	}
});