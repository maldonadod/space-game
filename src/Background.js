import Drawable from './Drawable'
import * as ImagesRepository from './ImagesRepository'

const Background = Object.create(Drawable);
Object.assign(Background, {
  speed: 1,
  canvas: document.getElementById('background'),
  context: document.getElementById('background').getContext('2d'),
  draw: function() {
    let { background } = ImagesRepository;
    let { x, y, speed } = this;
    let { height } = this.canvas;

		this.y += speed;
		this.context.drawImage(background, x, y);
		this.context.drawImage(background, x, y - height);
		if (this.y >= height) {
      this.y = 0;
    }
	}
});

export {
  Background
}
