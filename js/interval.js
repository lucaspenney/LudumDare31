function Interval(time) {
	this.timeInterval = time;
	this.timePassed = time;
	this.lastTick = this.getCurrentMs();
}

Interval.prototype.hasElapsed = function() {
	console.log(this.getCurrentMs() - this.lastTick);
	if (this.getCurrentMs() - this.lastTick > this.timeInterval) {
		return true;
	}
	return false;
};

Interval.prototype.reset = function() {
	this.lastTick = this.getCurrentMs();
};

Interval.prototype.getCurrentMs = function() {
	var date = new Date();
	var ms = date.getTime() / 1000;
	return ms;
};