function Game(stage) {
  this.stage = jQuery(stage);
  this.stage.html('<canvas></canvas>');
  this.canvasElement = this.stage.find('canvas').get(0);
  this.canvasElement.setAttribute('height', this.stage.height());
  this.canvasElement.setAttribute('width', this.stage.width());
  this.ctx = this.canvasElement.getContext('2d');
  this.fpsManager = new FPSManager();
  this.eventManager = new EventManager();
  this.entities = [];
  this.screen = new Screen();
  this.input = new InputManager(this);
  this.tick = function() {
    var _this = this;
    requestAnimationFrame(function() {
      _this.tick();
    });
    this.fpsManager.now = Date.now();
    this.fpsManager.delta = this.fpsManager.now - this.fpsManager.then;
    if (this.fpsManager.delta > this.fpsManager.interval) {
      this.fpsManager.then = this.fpsManager.now - (this.fpsManager.delta % this.fpsManager.interval);
      this.render();
      this.update();
    }
  };
  new Player(this, 100, 100);
  new Asteroid(this, 150, 150);
  this.tick();
}


Game.prototype.render = function() {
  this.ctx.fillStyle = "#000000";
  this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  this.fpsManager.render(this.ctx);
  this.entities.sort(function(a, b) {
    if (a === null) return 1;
    if (b === null) return -1;
    if (a.layer === undefined) a.layer = 0;
    if (b.layer === undefined) b.layer = 0;
    if (a.layer < b.layer)
      return -1;
    if (a.layer > b.layer)
      return 1;
    return 0;
  });
  for (var i = 0; i < this.entities.length; i++) {
    this.entities[i].render();
  }
};

Game.prototype.update = function() {
  for (var i = 0; i < this.entities.length; i++) {
    this.entities[i].update();
  }
};