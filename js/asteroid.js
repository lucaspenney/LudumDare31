Asteroid.extend(Entity);

function Asteroid(game, x, y) {
    Entity.apply(this, arguments);
    this.sprite = new Sprite(this.game, this, "img/asteroid.png");
    this.physics = new Physics(game, this);
}

Asteroid.prototype.update = function() {
    this.physics.setVelocity(0, 0, 1);
    this.physics.update();
};