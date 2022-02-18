const { bar } = require('./foobar');

describe('Test', () => {

  it('bar', async () => {
    process.removeAllListeners('unhandledRejection');
    // bar() returns a resolved promise as expected, so the test passes.
    await bar();
  })

})