import * as ex from 'excalibur';
import { StarterResources } from '@client/projects/starterGame/StarterResources';

/**
 * Represents the background
 */
export class StarterBackground extends ex.Actor {
  // Properties -----------------------------------

  // Fields ---------------------------------------

  // Initialization -------------------------------
  constructor() {
    super();
  }

  onInitialize() {
    const sprite = StarterResources.BackgroundImage.toSprite();
    this.graphics.use(sprite);
  }

  // Methods --------------------------------------

  // Event Handlers -------------------------------
}
