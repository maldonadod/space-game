var Bullet = (function() {

  function Bullet() {
    this.x = 0;
    this.y = 0;

    this.width = 2;
    this.height = 14;
  }
  Bullet.prototype.context = document.getElementById('main').getContext('2d');

  Bullet.prototype.clear = function() {
		this.x = 0;
		this.y = 0;
		this.speed = 0;
	};

  Bullet.prototype.draw = function() {
    this.context.clearRect(this.x, this.y, this.width, this.height);
		this.y -= this.speed;
		if (this.y <= 0 - this.height) {
			return true;
		}
		else {
			this.context.drawImage(ImagesRepository.bullet, this.x, this.y);
		}
  }
  Bullet.prototype.spawn = function(x, y, speed) {
		this.x = x;
		this.y = y;
		this.speed = speed;
	};

  return Bullet;
})();
