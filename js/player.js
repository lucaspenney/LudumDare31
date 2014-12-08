Player.extend(Entity);

function Player(game, x, y) {
	Entity.apply(this, arguments);
	this.rotation = 0;
	this.sprite = new Sprite(this.game, this, "img/player.png");
	this.xv = 0;
	this.yv = 0;
	this.rv = 0;
	this.layer = 100;
	this.trail = new Trail(this.game, 0, 0, this, 8);
	this.enginesOn = false;
	this.turnThrust = 0.35;
	this.mainThrust = 0.4;
}

Player.prototype.update = function() {
	Entity.prototype.update.call(this);
	this.enginesOn = false;
	if (this.game.input.keys[38] || this.game.input.keys[87]) {
		this.enginesOn = true;
		this.xv += Math.cos(degToRad(this.rotation - 90)) * this.mainThrust;
		this.yv += Math.sin(degToRad(this.rotation - 90)) * this.mainThrust;;
		if (this.xv > 10) this.xv = 10;
		if (this.yv > 10) this.yv = 10;
		if (this.xv < -10) this.xv = -10;
		if (this.yv < -10) this.yv = -10;
	}
	if (this.game.input.keys[37] || this.game.input.keys[65]) { //Left Arrow
		this.enginesOn = true;
		this.rv -= this.turnThrust;;
	}
	if (this.game.input.keys[39] || this.game.input.keys[68]) { //right arrow
		this.enginesOn = true;
		this.rv += this.turnThrust;
	}
	this.x += this.xv;
	this.y += this.yv;
	this.rotation += this.rv;
	if (this.rv > 10) this.rv = 10;
	if (this.rv < -10) this.rv = -10;
	if (Math.random() > 0.5) {
		this.xv = this.xv * 0.99;
		this.yv = this.yv * 0.99;
		this.rv = this.rv * 0.99;
	}

	this.game.screen.setXOffset(this.x - 350);
	this.game.screen.setYOffset(this.y - 350);
};