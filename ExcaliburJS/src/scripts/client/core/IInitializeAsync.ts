/**
 * Interface for classes that can be initialized asynchronously.
 */
export interface IInitializableAsync {
  // Properties -----------------------------------
  /**
   * Gets a value indicating whether the object is initialized.
   */
  get isInitialized(): boolean;

  // Initialization -------------------------------
  /**
   * Initializes the object asynchronously.
   * @returns A promise that resolves when the initialization is complete.
   */
  initializeAsync(): Promise<any>;

  /**
   * Ensures that the object is initialized.
   * @returns An indication of the initialization state.
   */
  requireIsInitialized(): any;
}
