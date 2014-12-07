Player.extend(Entity);

function Player(game, x, y) {
	Entity.apply(this, arguments);
	this.rotation = 0;
	this.sprite = new Sprite(this.game, this, "img/player.png");
	this.xv = 0;
	this.yv = 0;
	this.trail = new Trail(this.game, 0, 0, this, 12);
	this.enginesOn = false;
}

Player.prototype.update = function() {
	Entity.prototype.update.call(this);
	this.enginesOn = false;
	if (this.game.input.keys[38] || this.game.input.keys[87]) {
		this.enginesOn = true;
		this.xv += Math.cos(degToRad(this.rotation - 90)) * 0.4;
		this.yv += Math.sin(degToRad(this.rotation - 90)) * 0.4;
		if (this.xv > 10) this.xv = 10;
		if (this.yv > 10) this.yv = 10;
		if (this.xv < -10) this.xv = -10;
		if (this.yv < -10) this.yv = -10;
	}
	if (this.game.input.keys[37] || this.game.input.keys[65]) { //Left Arrow
		this.enginesOn = true;
		this.rotation -= 5;
	}
	if (this.game.input.keys[39] || this.game.input.keys[68]) { //right arrow
		this.enginesOn = true;
		this.rotation += 5;
	}
	this.x += this.xv;
	this.y += this.yv;
	if (Math.random() > 0.5) {
		this.xv = this.xv * 0.99;
		this.yv = this.yv * 0.99;
	}

	this.game.screen.setXOffset(this.x - 350);
	this.game.screen.setYOffset(this.y - 350);
};