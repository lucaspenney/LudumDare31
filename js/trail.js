Trail.extend(Entity);

function Trail(game, x, y, parent, centerOffset) {
	Entity.apply(this, arguments);
	this.parent = parent;
	this.centerOffset = centerOffset;
	this.positions = [];
}

Trail.prototype.render = function() {
	for (var i = 0; i < this.positions.length; i++) {
		if (i == this.positions.length) continue;
		this.game.ctx.fillStyle = "#333333";
		this.game.ctx.fillRect(this.positions[i].x - this.game.screen.xOffset, this.positions[i].y - this.game.screen.yOffset, Math.random() * 10, Math.random() * 10);
	}
};

Trail.prototype.update = function() {
	if (!this.parent.enginesOn) return;
	this.x = this.parent.x + ((Math.cos(degToRad(this.parent.rotation - 90)) * -1) * this.centerOffset) - 16;
	this.y = this.parent.y + ((Math.sin(degToRad(this.parent.rotation - 90)) * -1) * this.centerOffset) - 16;
	var trailsToShow = Math.round(Math.abs(this.parent.xv) + Math.abs(this.parent.yv)) * 0.5;
	if (trailsToShow > this.positions.length) {
		this.positions.push({
			x: this.x,
			y: this.y,
		});
	}
	if (trailsToShow < 2) trailsToShow = 2;
	if (trailsToShow > 10) trailsToShow = 10;
	if (this.positions.length > trailsToShow) {
		for (var i = 0; i < 10 - trailsToShow; i++) {
			this.positions.shift();
		}
	}
};