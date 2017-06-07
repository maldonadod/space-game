import ObjectPool from './ObjectPool'
import { Bullet } from './Bullet'

function BulletPool(size) {

  ObjectPool.call(this, size, Bullet);

  this.getTwo = function getTwo(x1, y1, speed1, x2, y2, speed2) {
    if(!this.pool[size - 1].alive && !this.pool[size - 2].alive) {
      this.get(x1, y1, speed1);
      this.get(x2, y2, speed2);
     }
  }

  this.animate = function() {
    for (var i = 0; i < size; i++) {
      let bullet = this.pool[i];
      if (bullet.alive) {
        if (bullet.draw()) {
          bullet.clear();
          bullet.alive = false;
          let [ extracted ] = this.pool.splice(i,1);
          this.pool.push(extracted);
        }
      }
    }
  }
}

BulletPool.prototype = ObjectPool.prototype;

export default BulletPool
