import noop from 'lodash/noop';
import requireObjectCoercible from 'src/require-object-coercible-x';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolIt = hasSymbol ? it : xit;

describe('basic tests', function() {
  it('should throw TypeError everything', function() {
    expect.assertions(3);
    expect(function() {
      requireObjectCoercible();
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      requireObjectCoercible(undefined);
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      requireObjectCoercible(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return value for everything', function() {
    expect.assertions(1);
    const values = [true, 'abc', 1, noop, [], /r/];
    const actual = values.map(requireObjectCoercible);
    expect(actual).toStrictEqual(values);
  });

  ifSymbolIt('should return Symbol', function() {
    expect.assertions(1);

    const sym = Symbol('foo');
    expect(requireObjectCoercible(sym)).toBe(sym);
  });
});
