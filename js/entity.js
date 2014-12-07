//Entity

//Function to subclass entities 
Function.prototype.extend = function(parent) {
  this.prototype = Object.create(parent.prototype);
};

function Entity(game, x, y) {
  this.game = game;
  this.x = x;
  this.y = y;
  this.rotation = 0;
  this.sprite = null;
  this.game.entities.push(this);
}

Entity.prototype.render = function() {
  if (this.sprite) {
    this.sprite.draw(this.x, this.y);
  }
}

Entity.prototype.update = function() {

}