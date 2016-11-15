'use strict';

const assert = require('chai').assert;

describe('Config', () => {
  let config = require('../common/config');

  it('should be correct `convict` object', () => {
    assert.isObject(config, '`config` is not Object');
    assert.isFunction(config.get, '`config` doesn\'t have method `get()`');
    assert.isFunction(config.getProperties, '`config` doesn\'t have method `getProperties()`');
  });

  it('should contain property `env`', () => {
    assert.doesNotThrow(() => config.get('env'), 'property `env` not set');
    assert.isString(config.get('env'), 'property `env` be string');
  });
});

describe('DB', () => {
  it('should successfully connect to DB', () => {

  });
});