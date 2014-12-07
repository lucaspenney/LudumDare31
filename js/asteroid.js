Asteroid.extend(Entity);

function Asteroid(game, x, y) {
	Entity.apply(this, arguments);
	this.sprite = new Sprite(this.game, this, "img/asteroid.png");
}

Asteroid.prototype.update = function() {
	this.rotation += 3;
};