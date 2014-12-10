Bullet.extend(Entity);

function Bullet(game, x, y, player, direction, speed) {
	Entity.apply(this, arguments);
	this.sprite = new Sprite(this.game, this, "img/bullet.png")
	this.physics = new Physics(game, this);
	this.rotation = direction;
	this.speed = speed;
	this.owner = player;

	this.physics.setVelocity(Math.cos(degToRad(this.rotation - 90)) * this.speed, Math.cos(degToRad(this.rotation - 90)) * this.speed);
}

Bullet.prototype.update = function() {
	Entity.prototype.update.call(this);
	var xVel = Math.cos(degToRad(this.rotation - 90)) * this.speed;
	var yVel = Math.sin(degToRad(this.rotation - 90)) * this.speed;
	this.physics.addVelocity(xVel, yVel);
	this.physics.update();
};