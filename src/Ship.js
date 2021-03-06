import { Controls } from './Controls'
import Drawable from './Drawable'
import BulletPool from './BulletPool'
import * as ImagesRepository from './ImagesRepository'

const Ship = Object.create(Drawable);
Object.assign(Ship, {
  speed: 6,
  bullets: new BulletPool(30),
  fire: function() {
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
    this.width = 64;
    this.height = 64;
  },
  draw: function() {
    this.counter++;
    let { ship } = ImagesRepository;
    let { width: shipw, height: shiph } = ship;
    let { x, y, speed } = this;
    let { height, width } = this.canvas;
    let spriteY = -5;
    let spriteX = 32;
    this.context.clearRect(0, 0, width, height);

    if (Controls['ArrowLeft']) {
      this.x -= speed;
      spriteX = -6;
      spriteY += 45;
    }
    if (Controls['ArrowRight']) {
      this.x += speed;
      spriteX = 80;
      spriteY += 45;
    }
    if (Controls['ArrowUp']) {
      this.y -= speed;
      spriteY += 45;
    }
    if (Controls['ArrowDown']) {
      this.y += speed;
      spriteY += 45;
    }
    if (Controls['Space'] && this.counter >= this.fireRate) {
      this.fire();
			this.counter = 0;
    }
    this.context.drawImage(ship, spriteX, spriteY, 45, 45, this.x, this.y, 45, 45);
    this.bullets.animate();
	}
});

export {
  Ship
}
