/* eslint-env node, jasmine */

var gulpCompanion = process.env.JASMINE_TEST === 'lib'
  ? require('../lib/index')
  : require('../src/index')

describe('gulpCompanion', () => {
  it('should export object', () => {
    expect(gulpCompanion).toEqual(jasmine.any(Object))
  })
})
