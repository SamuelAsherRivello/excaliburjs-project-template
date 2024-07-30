import * as ex from 'excalibur';
import background from '@assets/images/background.png';
import sword from '@assets/images/sword.png';
import hit from '@assets/audio/sfx/hit.wav';
import britanic from '@assets/fonts/Britanic.ttf';

const BackgroundImage = new ex.ImageSource(background);
const SwordImage = new ex.ImageSource(sword);
const HitSound = new ex.Sound(hit);
const BritanicFont = new ex.FontSource(britanic, 'Britanic');

export const StarterResources = {
  BackgroundImage,
  SwordImage,
  HitSound,
  BritanicFont,
  Loader: new ex.Loader([BackgroundImage, SwordImage, HitSound, BritanicFont]),
};
