import * as ex from 'excalibur';
import { StarterResources } from './StarterResources';
import { ImageFiltering } from 'excalibur';

export class StarterText extends ex.ScreenElement {
  // Properties -----------------------------------
  public get text(): string {
    return this._label.text;
  }
  public set text(text: string) {
    this._label.text = text;
  }
  // Fields ---------------------------------------
  private _label: ex.Label;

  // Initialization -------------------------------
  constructor() {
    const label = new ex.Label({
      text: '',
      font: new ex.Font({
        size: 30,
        color: ex.Color.White,
        unit: ex.FontUnit.Px,
        family: StarterResources.BritanicFont.family,
        style: ex.FontStyle.Normal,
        bold: false,
        textAlign: ex.TextAlign.Left,
        baseAlign: ex.BaseAlign.Alphabetic,
        direction: ex.Direction.LeftToRight,
        shadow: {
          blur: 2,
          offset: ex.vec(1, 1),
          color: ex.Color.Blue,
        },
      }),
      pos: ex.vec(0, 0),
    });

    super({ width: label.width, height: label.height, anchor: ex.vec(0, 0) });
    this._label = label;
  }

  onInitialize() {
    this.addChild(this._label);
  }

  // Methods --------------------------------------

  // Event Handlers -------------------------------
}
