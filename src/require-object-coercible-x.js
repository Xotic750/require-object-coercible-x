import isNil from 'is-nil-x';

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */
export default function requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError(`Cannot call method on ${value}`);
  }

  return value;
}
