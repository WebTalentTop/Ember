QUnit.module('ESLint | app');

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('components/sign-in.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/sign-in.js should pass ESLint\n\n');
});

QUnit.test('components/sign-up.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/sign-up.js should pass ESLint\n\n10:14 - \'event\' is defined but never used. (no-unused-vars)');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'router.js should pass ESLint\n\n');
});

QUnit.test('routes/sign-in.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/sign-in.js should pass ESLint\n\n');
});

QUnit.test('routes/sign-up.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/sign-up.js should pass ESLint\n\n');
});

