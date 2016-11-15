'use strict';

const assert = require('chai').assert;
const convict = require('convict');

const configPath = '../../common/config/index';

let config;

describe('Config', () => {
  it('should config validation pass', () => {
    assert.doesNotThrow(() => config = require(configPath), !/Error: *. must be of type *./)
  });

  it('should contain method `get()`', () => {
    assert.isFunction(config.get);
  });

  it('should contain method `getProperties()`', () => {
    assert.isFunction(config.getProperties);
  });

  it('should contain property `env`', () => {
    assert.doesNotThrow(() => config.get('env'), 'property `env` not set');
  });

  it('should property `env` be string', () => {
    assert.isString(config.get('env'));
  });
});