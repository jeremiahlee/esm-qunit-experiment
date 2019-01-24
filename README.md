# QUnit + ESM test

## Tell us about your runtime:

* **QUnit version**: 2.9.1
* **What environment are you running QUnit in? (e.g., browser, Node)**: Node v11.7.0
* **How are you running QUnit? (e.g., script, testem, Grunt)**: CLI

## What are you trying to do?

Pull request qunitjs/qunit#1271 added the `--require` option, but it does not seem to work with [`esm`](https://www.npmjs.com/package/esm), as @jdalton [hoped](https://github.com/qunitjs/qunit/pull/1271#issuecomment-376379279).

I wrote a [test of using `esm` with `qunit --require`](https://github.com/jeremiahlee/esm-qunit-experiment). Perhaps I am not doing it correctly. If you can help me figure this out, I would happily contribute to qunitjs/qunit#144.

`npm install` to get `esm` package.

`qunit --require esm test.js` to run the test.

## What actually happened?

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

## What did you expect to happen?

```
TAP version 13
ok 1 Hinkle finkle dinkle doo
1..1
# pass 1
# skip 0
# todo 0
# fail 0
```




