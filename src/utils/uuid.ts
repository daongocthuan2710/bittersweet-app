import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a random UUID (Universally Unique Identifier) using the v4 version.
 *
 * This function utilizes the `uuidv4` method to create a random UUID string with a 128-bit value.
 * The generated UUID is unique and not predictable, making it suitable for generating keys or IDs.
 *
 * @returns {string} A randomly generated UUID (v4) string.
 *
 * @example
 * const randomKey = generateKey();
 * console.log(randomKey);
 * // Output: 'c7c93eb3-42d0-44b3-a1e0-6052402c9ec1' (example UUID, actual value will vary)
 */
export const generateKey = () => uuidv4();
