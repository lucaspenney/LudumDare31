Asteroid.extend(Entity);

function Asteroid(game, x, y) {
	Entity.apply(this, arguments);
	this.sprite = new Sprite(this.game, this, "img/asteroid.png");
	this.physics = new Physics(game, this);
	this.physics.setVelocity(Math.random(), Math.random(), Math.random() - 0.5);
}

Asteroid.prototype.update = function() {
	this.physics.update();
};