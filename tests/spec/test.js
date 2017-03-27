/* jslint maxlen:80, es6:true, white:true */

/* jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
   freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
   nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
   es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
   maxstatements:12, maxcomplexity:4 */

/* eslint strict: 1, max-lines: 1, symbol-description: 1, max-nested-callbacks: 1,
   max-statements: 1, id-length: 1 */

/* global JSON:true, expect, module, require, describe, xit, it, returnExports */

(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var hasSymbol = typeof Symbol === 'function' && typeof Symbol() === 'symbol',
    ifSymbolIt = hasSymbol ? it : xit,
    $requireObjectCoercible;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    var es7 = require('es7-shim');
    Object.keys(es7).forEach(function (key) {
      var obj = es7[key];
      if (typeof obj.shim === 'function') {
        obj.shim();
      }
    });
    $requireObjectCoercible = require('../../index.js');
  } else {
    $requireObjectCoercible = returnExports;
  }

  describe('Basic tests', function () {
    it('should throw TypeError everything', function () {
      expect(function () {
        $requireObjectCoercible();
      }).toThrow();
      expect(function () {
        $requireObjectCoercible(undefined);
      }).toThrow();
      expect(function () {
        $requireObjectCoercible(null);
      }).toThrow();
    });

    it('should return value for everything', function () {
      var values = [true, 'abc', 1, function () {}, [], /r/],
        actual = values.map($requireObjectCoercible);
      expect(actual).toEqual(values);
    });

    ifSymbolIt('should return Symbol', function () {
      var sym = Symbol('foo');
      expect($requireObjectCoercible(sym)).toBe(sym);
    });
  });
}());
