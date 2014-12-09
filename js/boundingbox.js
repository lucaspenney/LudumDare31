function BoundingBox(game, entity) {
	this.game = game;
	this.x = x;
	this.y = y;
	this.xOffset = 0;
	this.yOffset = 0;
	this.width = entity.sprite.width;
	this.height = entity.sprite.height;
}

BoundingBox.prototype.update = function(x, y) {
	this.x = x;
	this.y = y;
};

BoundingBox.prototype.setWidth = function(width) {
	this.width = width;
};

BoundingBox.prototype.setHeight = function(height) {
	this.height = height;
};

BoundingBox.prototype.wouldCollide = function(x, y, e) {
	var wouldCollide = false;
	this.x += x;
	this.y += y;
	if (this.isColliding(e)) wouldCollide = true;
	this.x -= x;
	this.y -= y;
	return wouldCollide;
};

BoundingBox.prototype.isColliding = function(e) {
	if (e === undefined) return false;
	if (this.x + this.width > e.boundingBox.x && this.x < e.boundingBox.x + e.boundingBox.width) {
		if (this.y + this.height > e.boundingBox.y && this.y < e.boundingBox.y + e.boundingBox.height) {
			return true;
		}
	}
	return false;
};

BoundingBox.prototype.getDistBetween = function(e) {
	var point1a = this.x + (this.width / 2);
	var point1b = this.y + (this.height / 2);
	var point1 = new Point(point1a, point1b);
	var point2a = e.boundingBox.x + (e.boundingBox.width / 2);
	var point2b = e.boundingBox.y + (e.boundingBox.height / 2);
	var point2 = new Point(point2a, point2b);
	return point1.getDist(point2);

}

BoundingBox.prototype.isPointIn = function(x, y) {
	if (this.x === undefined || this.y === undefined || this.x === null || this.y === null) return -1;
	if (this.x + this.width > x && this.x < x) {
		if (this.y + this.height > y && this.y < y) {
			return true;
		}
	}
	return false;
};

BoundingBox.prototype.draw = function() {
	//For debugging
	if (this.game.debugMode) {
		ctx.strokeStyle = "#00F";
		ctx.strokeRect(this.x + Game.screen.xOffset, this.y + Game.screen.yOffset, this.width, this.height);
	}
};