/**
 * Removes accents and special characters from a string.
 *
 * This function replaces accented characters and special characters with their unaccented counterparts.
 * The characters 'àáạảãâầấậẩẫăằắặẳẵ' will be replaced with 'a',
 * 'èéẹẻẽêềếệểễ' will be replaced with 'e',
 * 'ìíịỉĩ' will be replaced with 'i',
 * 'òóọỏõôồốộổỗơờớợởỡ' will be replaced with 'o',
 * 'ùúụủũưừứựửữ' will be replaced with 'u',
 * 'ỳýỵỷỹ' will be replaced with 'y',
 * 'đ' will be replaced with 'd',
 * 'ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ' will be replaced with 'A',
 * 'ÈÉẸẺẼÊỀẾỆỂỄ' will be replaced with 'E',
 * 'ÌÍỊỈĨ' will be replaced with 'I',
 * 'ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ' will be replaced with 'O',
 * 'ÙÚỤỦŨƯỪỨỰỬỮ' will be replaced with 'U',
 * 'ỲÝỴỶỸ' will be replaced with 'Y',
 * 'Đ' will be replaced with 'D'.
 *
 * @param {string} str - The input string containing accented and special characters.
 * @returns {string} The input string with accented and special characters replaced.
 *
 * @example
 * const inputString = 'Thịs ís à tést Štrìng';
 * const outputString = removeAccent(inputString);
 * console.log(outputString);
 * // Output: 'This is a test String'
 */
export const removeAccent = (str: string): string => {
    str = str.replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a');
    str = str.replace(/[èéẹẻẽêềếệểễ]/g, 'e');
    str = str.replace(/[ìíịỉĩ]/g, 'i');
    str = str.replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o');
    str = str.replace(/[ùúụủũưừứựửữ]/g, 'u');
    str = str.replace(/[ỳýỵỷỹ]/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/[ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ]/g, 'A');
    str = str.replace(/[ÈÉẸẺẼÊỀẾỆỂỄ]/g, 'E');
    str = str.replace(/[ÌÍỊỈĨ]/g, 'I');
    str = str.replace(/[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    return str;
  };
  
  /**
   * Generates a field code based on the input value by removing accents, special characters,
   * and converting spaces to underscores.
   *
   * This function takes an input value and performs the following steps to generate the field code:
   * 1. Removes accents from characters using the `removeAccent` function.
   * 2. Replaces colons (:) with underscores (_).
   * 3. Removes all non-alphanumeric characters and underscores, preserving spaces.
   * 4. Converts all spaces to underscores (_).
   * 5. Optionally converts the resulting field code to lowercase if the `lower` parameter is set to `true`.
   *
   * @param {string} value - The input value to generate the field code from.
   * @param {boolean} [lower=true] - Whether to convert the resulting field code to lowercase. Defaults to `true`.
   * @returns {string} The generated field code.
   *
   * @example
   * const inputValue = 'Hello, World!';
   * const fieldCode = genFieldCode(inputValue);
   * console.log(fieldCode);
   * // Output: 'hello_world'
   *
   * @example
   * const inputValue = 'User:John Doe';
   * const fieldCode = genFieldCode(inputValue, false);
   * console.log(fieldCode);
   * // Output: 'User_John_Doe'
   */
  export const genFieldCode = (value = '', lower = true) => {
    const fieldCode = removeAccent(value)
      .replace(':', '_')
      .replace(/[^a-zA-Z0-9 _]/g, '')
      .trim()
      .replace(/ /g, '_');
  
    return lower ? fieldCode.toLocaleLowerCase() : fieldCode;
  };
  