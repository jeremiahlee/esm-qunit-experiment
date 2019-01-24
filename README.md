# QUnit + ESM test

Doesn't seem to work.

`npm install` to get `esm` package.

`qunit --require esm test.js` to run the test. Results:

```
TAP version 13
not ok 1 test.js > Failed to load the test file with error:
/Users/jeremiah/Projects/esm-qunit-experiment/test.js:1
(function (exports, require, module, __filename, __dirname) { import {bar} from './foo.js';
                                                                     ^

SyntaxError: Unexpected token {
    at new Script (vm.js:84:7)
    at createScript (vm.js:264:10)
    at Object.runInThisContext (vm.js:312:10)
    at Module._compile (internal/modules/cjs/loader.js:684:28)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Module.require (internal/modules/cjs/loader.js:657:17)
    at require (internal/modules/cjs/helpers.js:22:18)
  ---
  message: "should be able to load file"
  severity: failed
  actual: false
  expected: true
  stack:     at Object.<anonymous> (/usr/local/lib/node_modules/qunit/src/cli/run.js:60:13)
  ...
1..1
# pass 0
# skip 0
# todo 0
# fail 1
```
