function FPSManager() {
  this.fps = 30;
  this.now = null;
  this.then = Date.now();
  this.interval = 1000 / this.fps;
  this.delta = null;
}

FPSManager.prototype.render = function(ctx) {
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("FPS: " + this.fps.toFixed(2), 20, 20);
};