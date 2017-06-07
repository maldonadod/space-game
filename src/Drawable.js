const Drawable = {
  speed: 0,
  init: function(x, y) {
    this.x = x;
    this.y = y;
  },
  draw: function() {
    throw new Error('Draw should be overwritten')
  }
};

export default Drawable
