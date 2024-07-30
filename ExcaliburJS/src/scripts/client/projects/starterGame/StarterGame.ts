import * as ex from 'excalibur';
import { StarterPlayer } from '@client/projects/starterGame/StarterPlayer';
import { IInitializableAsync } from '@client/core/IInitializeAsync';
import { StarterResources } from './StarterResources';
import { StarterBackground } from './StarterBackground';
import { StarterText } from './StarterText';

export class StarterGame extends ex.Engine implements IInitializableAsync {
  // Events ---------------------------------------

  // Properties -----------------------------------

  // Fields ---------------------------------------
  private _starterText!: StarterText;
  private _starterPlayer!: StarterPlayer;
  private _starterBackground!: StarterBackground;

  // Initialization -------------------------------
  constructor() {
    const retroFactor: number = 2; //1 HD, 2 SD, 3 Retro
    //
    const engineOptions: ex.EngineOptions = {
      canvasElementId: 'excaliburjs-game-canvas',
      width: 900 / retroFactor,
      height: 1600 / retroFactor,
      displayMode: ex.DisplayMode.FitContainer,
      maxFps: 120,
      physics: {
        solver: ex.SolverStrategy.Arcade,
      },
      antialiasing: {
        pixelArtSampler: true, // turns on the sub-pixel shader for pixel art
        nativeContextAntialiasing: false, // turns off canvas aa
        multiSampleAntialiasing: true, // turns on msaa which smooths quad boundaries
        filtering: ex.ImageFiltering.Pixel, // hints the image loader to use pixel filtering
        canvasImageRendering: 'auto', // applies the 'auto'-matic css to the canvas CSS image-rendering
      },
      suppressPlayButton: true,
    };

    super(engineOptions);
  }

  public async initializeAsync(): Promise<any> {
    if (this.isInitialized) {
      return Promise.resolve();
    }

    this.start(StarterResources.Loader);

    this.initializeStarterBackground();
    this.initializeStarterPlayer();
    this.initializeStarterText();
  }

  private initializeStarterBackground(): void {
    // Create
    this._starterBackground = new StarterBackground();

    // Center
    this._starterBackground.pos.x = this.screen.resolution.width / 2;
    this._starterBackground.pos.y = this.screen.resolution.height / 2;

    // Add
    this.currentScene.add(this._starterBackground);
  }

  private initializeStarterPlayer(): void {
    // Create
    this._starterPlayer = new StarterPlayer();

    // Center
    this._starterPlayer.pos.x = this.screen.resolution.width / 2;
    this._starterPlayer.pos.y = this.screen.resolution.height / 2;

    // Add
    this.currentScene.add(this._starterPlayer);
  }

  private initializeStarterText(): void {
    // Create
    this._starterText = new StarterText();

    // Center
    this._starterText.pos.x = 10;
    this._starterText.pos.y = 30;

    // Add
    this.currentScene.add(this._starterText);
    this._starterText.text = 'Use Arrow Keys To Move';
  }

  requireIsInitialized() {
    if (!this.isInitialized) {
      throw new Error('Method not implemented.');
    }
  }

  // Methods --------------------------------------

  private handlePlayerInput(engine: ex.Engine, delta: number): void {
    this.requireIsInitialized();
    //
    if (this.input.keyboard.wasPressed(ex.Keys.Left) || this.input.keyboard.wasPressed(ex.Keys.A)) {
      this._starterPlayer.move(engine, delta, new ex.Vector(-1, 0));
    } else if (this.input.keyboard.wasPressed(ex.Keys.Right) || this.input.keyboard.wasPressed(ex.Keys.D)) {
      this._starterPlayer.move(engine, delta, new ex.Vector(1, 0));
    } else if (this.input.keyboard.wasPressed(ex.Keys.Up) || this.input.keyboard.wasPressed(ex.Keys.W)) {
      this._starterPlayer.move(engine, delta, new ex.Vector(0, -1));
    } else if (this.input.keyboard.wasPressed(ex.Keys.Down) || this.input.keyboard.wasPressed(ex.Keys.S)) {
      this._starterPlayer.move(engine, delta, new ex.Vector(0, 1));
    }

    if (this.input.keyboard.wasPressed(ex.Keys.Space) || this.input.keyboard.wasPressed(ex.Keys.Enter)) {
      console.log('Action!');
    }
  }

  // Event Handlers -------------------------------
  onPreUpdate(engine: ex.Engine, delta: number): void {
    super.onPreUpdate(engine, delta);
    this.handlePlayerInput(engine, delta);
  }
}
