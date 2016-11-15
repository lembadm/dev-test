'use strict';

const assert = require('chai').assert;

const modelsPath = '../../common/models';

let models;

describe('DB', () => {
  it('should loaded', () => {
      assert.doesNotThrow(() => models = require(modelsPath), !/Error: *. must be of type *./)
  });

  it('should successfully connect to DB', () => models.sequelize.authenticate())
});

