import Bullet from "../classes/Bullet";
import Obstacle from "../classes/Obstacle";

/**
 * If the bullet is above the obstacle and the bullet is between the obstacle's left and right edges,
 * then the bullet should move down
 * @param {Bullet} bullet - Bullet - The bullet object
 * @param {Obstacle} obstacle - Obstacle - The obstacle that the bullet is colliding with
 */
export const detectObstacleAndBulletDetection = function (bullet: Bullet, obstacle: Obstacle): boolean {
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
