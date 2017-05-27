var Ship = Object.create(Drawable);
Object.assign(Ship, {
  speed: 6,
  bullets: new BulletPool(30),
  fire: function() {
    console.log(this)
		this.bullets.getTwo(this.x+6, this.y, 3, this.x+33, this.y, 3);
	},
  canvas: document.getElementById('ship'),
  context: document.getElementById('ship').getContext('2d'),
  init: function() {
    this.fireRate = 15;
    this.counter = 0;
    let { height, width } = this.canvas;
    this.x = width / 2;
    this.y = height - 50;
  },
  draw: function() {
    this.counter++;
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
    if (keyStatus['Space'] && this.counter >= this.fireRate) {
      this.fire();
			this.counter = 0;
    }

    this.context.drawImage(ship, this.x, this.y);

    this.bullets.animate();
	}
});
