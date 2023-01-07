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

export const detectEnemyAndBulletCollision = function (bullet: Bullet, enemy: Enemy) {
  const isCollidingYAxis = enemy.position.y - 5 < bullet.position.y && enemy.position.y + 5 > bullet.position.y;
  const isCollidingXAxis =
    enemy.position.x <= bullet.position.x + bullet.size.width &&
    enemy.position.x + enemy.size.width >= bullet.position.x;

  // If bullet is moving up and bullet hits the bottom of the enemy return true
  if (bullet.movingDirection === "up" && isCollidingXAxis && isCollidingYAxis) {
    return true;
  }

  return false;
};
