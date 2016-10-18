/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import arrayMultiplier from '../pages/array-multiplier';

describe('Acceptance: ArrayMultiplier', function() {
  let application;

  beforeEach(function() {
    application = startApp();
    arrayMultiplier.visit();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('starts with the right values', function() {
    expect(arrayMultiplier.multiplier.listItems()).to.deep.equal([1, 2, 3]);
  });

  describe('entering a multiplier and clicking calculate', function() {
    beforeEach(function() {
      arrayMultiplier.multiplier.input(4);
      arrayMultiplier.multiplier.calculate();
    });

    it('correctly multiples all the values by 4', function() {
      expect(arrayMultiplier.multiplier.listItems()).to.deep.equal([4, 8, 12]);
    });
  });
});
