var Character = function (sprite, x, y) {
  /** Draw the character on the screen, required method for game
   */
  var render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
  }
  this.sprite = sprite
  this.x = x
  this.y = y
  render.call(this)
}

/** Update the character's position, required method for game
 * @param {*} dt a time delta between ticks
 */
Character.prototype.update = function (dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
}

// Enemies our player must avoid
var Enemy = function (x, y) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  Character.call(this, 'images/enemy-bug.png', x, y)
}
Enemy.prototype = Object.create(Character.prototype)
Enemy.prototype.constructor = Enemy

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (origin) {
  const origins = {
    left: 1,
    right: 5
  }
  Character.call(this, 'images/char-boy.png', 3, origins[origin] || 1)
}
Player.prototype = Object.create(Character.prototype)
Player.prototype.constructor = Player

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  }

  if (allowedKeys[e.keyCode]) {
    player.handleInput(allowedKeys[e.keyCode])
  }
})
