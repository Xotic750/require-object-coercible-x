<a
  href="https://travis-ci.org/Xotic750/require-object-coercible-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/require-object-coercible-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/require-object-coercible-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/require-object-coercible-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/require-object-coercible-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/require-object-coercible-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/require-object-coercible-x"
  title="npm version">
<img src="https://badge.fury.io/js/require-object-coercible-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/require-object-coercible-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/require-object-coercible-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/require-object-coercible-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/require-object-coercible-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_require-object-coercible-x"></a>

## require-object-coercible-x

ES6-compliant shim for RequireObjectCoercible.

**See**: [7.2.1 RequireObjectCoercible ( argument )](http://www.ecma-international.org/ecma-262/6.0/#sec-requireobjectcoercible)

<a name="exp_module_require-object-coercible-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>string</code> ⏏

The abstract operation RequireObjectCoercible throws an error if argument
is a value that cannot be converted to an Object using ToObject.

**Kind**: Exported function  
**Returns**: <code>string</code> - The `value`.  
**Throws**:

- <code>TypeError</code> If `value` is a `null` or `undefined`.

| Param | Type            | Description           |
| ----- | --------------- | --------------------- |
| value | <code>\*</code> | The `value` to check. |

**Example**

```js
import RequireObjectCoercible from 'require-object-coercible-x';

RequireObjectCoercible(); // TypeError
RequireObjectCoercible(null); // TypeError
console.log(RequireObjectCoercible('abc')); // 'abc'
console.log(RequireObjectCoercible(true)); // true
console.log(RequireObjectCoercible(Symbol('foo'))); // Symbol('foo')
```
