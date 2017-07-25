define('rio/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/sign-in-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sign-in-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/sign-up-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sign-up-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/email-validate-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/email-validate-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/sign-up-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/sign-up-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/sign-in-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sign-in-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/sign-up-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sign-up-test.js should pass ESLint\n\n');
  });
});