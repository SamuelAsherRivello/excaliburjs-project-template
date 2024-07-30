import * as ex from 'excalibur';
import { StarterResources } from '@client/projects/starterGame/StarterResources';

/**
 * Represents the player
 */
export class StarterPlayer extends ex.Actor {
  // Properties -----------------------------------

  // Fields ---------------------------------------
  public readonly _moveSpeed = 3000;

  // Initialization -------------------------------
  constructor() {
    super();
  }

  onInitialize() {
    const sprite = StarterResources.SwordImage.toSprite();
    this.graphics.use(sprite);
  }

  // Methods --------------------------------------
  public async move(engine: ex.Engine, delta: number, movement: ex.Vector) {
    // Scale the movement vector by the _moveSpeed
    movement = movement.scale(this._moveSpeed * (delta / 1000));

    // Move the player by the movement vector
    this.pos = this.pos.add(movement);

    // Tween
    await StarterPlayer.ScaleUpAndDownAsync(this);

    // Play the hit sound
    StarterResources.HitSound.play();
  }

  //Optional: Move this to a new, static class for reuseability
  public static async ScaleUpAndDownAsync(target: ex.Actor) {
    // Clear
    target.actions.clearActions();

    // Create
    const change1 = new ex.ActionSequence(target, (ctx) => {
      ctx.scaleTo(ex.vec(1.3, 1.3), ex.vec(4, 4));
      ctx.scaleTo(ex.vec(1, 1), ex.vec(2, 2));
    });

    // Run
    const parallel = new ex.ParallelActions([change1]);
    await target.actions.runAction(parallel);
  }

  // Event Handlers -------------------------------
}
