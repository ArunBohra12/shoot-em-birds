import Bullet from "../classes/Bullet";
import Enemy from "../classes/Enemy";
import Obstacle from "../classes/Obstacle";

/**
 * If the bullet is above the obstacle and the bullet is between the obstacle's left and right edges,
 * then the bullet should move down
 * @param {Bullet} bullet - Bullet - The bullet object
 * @param {Obstacle} obstacle - Obstacle - The obstacle that the bullet is colliding with
 */
export const detectObstacleAndBulletCollision = function (bullet: Bullet, obstacle: Obstacle): boolean {
  if (
    obstacle.position?.y &&
    bullet.position.y <= obstacle.position.y + obstacle.size.height &&
    //
    // Bullet should be to the right of obstacle's x pos
    // and to left of obstacle's x pos + width
    obstacle.position.x <= bullet.position.x + bullet.size.width &&
    obstacle.position.x + obstacle.size.width >= bullet.position.x
  ) {
    return true;
  }

  return false;
};

/**
 * If the bullet is moving and the bullet is colliding with the enemy on the x and y axis, return true
 * @param {Bullet} bullet - Bullet - The bullet object
 * @param {Enemy} enemy - Enemy - The enemy object
 * @returns {boolean} - whether enemy & bullet are colliding
 */
export const detectEnemyAndBulletCollision = function (bullet: Bullet, enemy: Enemy): boolean {
  const enemyYPos = enemy.position.y;
  const bulletYPos = bullet.position.y;

  const isCollidingXAxis =
    enemy.position.x <= bullet.position.x + bullet.size.width &&
    enemy.position.x + enemy.size.width >= bullet.position.x;

  // Y-axis collision when bullet is moving up
  const isCollidingYAxisUpMovement = enemyYPos - 5 < bulletYPos && enemyYPos + 5 > bulletYPos;

  // Y-axis collision when bullet is moving down
  const isCollidingYAxisDownMovement =
    enemyYPos - enemy.size.height + 5 > bulletYPos && enemyYPos - enemy.size.height - 5 < bulletYPos;

  // If bullet is moving up and bullet hits the bottom of the enemy return true
  if (bullet.movingDirection === "up" && isCollidingXAxis && isCollidingYAxisUpMovement) {
    return true;
  }

  // If bullet is moving down and bullet hits the top of the enemy return true
  if (bullet.movingDirection === "down" && isCollidingXAxis && isCollidingYAxisDownMovement) {
    return true;
  }

  return false;
};
