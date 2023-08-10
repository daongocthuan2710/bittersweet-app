/**
 * Handles an error by logging it to the console.
 *
 * @param {unknown} error - The error to be handled. It can be of any type.
 * @param {Record<string, any>} params - Additional parameters related to the error (optional).
 * @returns {void}
 *
 * @example
 * try {
 *   // Some code that may throw an error
 * } catch (error) {
 *   const additionalParams = { userId: 123, location: 'New York' };
 *   handleError(error, additionalParams);
 * }
 *
 * @example
 * // Handling an error without additional parameters
 * const error = new Error('Something went wrong');
 * handleError(error);
 */
export const handleError = (error: unknown, params: Record<string, any>) => {
    console.log(error);
  };
  