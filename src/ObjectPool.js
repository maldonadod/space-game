function ObjectPool(size, entity) {

  this.pool = [];

  for(let i=0; i<size; i++) {
    let item = new entity();
    item.alive = false;
    this.pool.push(item)
  }

  this.get = function get(x, y, speed) {
    let last = this.pool[size - 1];
    if(!last.alive) {
      last.spawn(x, y, speed);
      last.alive = true;
      this.pool.unshift(this.pool.pop());
    }
  }
}

export default ObjectPool
