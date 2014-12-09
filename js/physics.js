function Physics(game, entity) {
	this.game = game;
	this.entity = entity;
	this.xv = 0;
	this.yv = 0;
	this.rv = 0;
	this.maxVelocity = 10;
	//this.boundingBox = new BoundingBox(game, entity);
}

Physics.prototype.update = function() {
	this.entity.x += this.xv;
	this.entity.y += this.yv;
	this.entity.rotation += this.rv;
};

Physics.prototype.addVelocity = function(x, y, r) {
	x = x || 0;
	y = y || 0;
	r = r || 0;

	if (this.xv > this.maxVelocity) this.xv = this.maxVelocity;
	else if (this.xv < this.maxVelocity * -1) this.xv = this.maxVelocity * -1;

	if (this.yv > this.maxVelocity) this.yv = this.maxVelocity;
	else if (this.yv < this.maxVelocity * -1) this.yv = this.maxVelocity * -1;

	if (this.rv > this.maxVelocity) this.rv = this.maxVelocity;
	else if (this.rv < this.maxVelocity * -1) this.rv = this.maxVelocity * -1;

	this.xv += x;
	this.yv += y;
	this.rv += r;

	if (Math.random() > 0.5) {
		this.xv = this.xv * 0.99;
		this.yv = this.yv * 0.99;
		this.rv = this.rv * 0.99;
	}
};