import {bar} from './foo.js';

QUnit.test("Hinkle finkle dinkle doo", function(assert) {
    assert.equal(bar(true), true);
});