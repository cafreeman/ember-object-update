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
import simpleCounter from '../pages/simple-counter';

describe('Acceptance: UpdateSimpleCounter', function() {
  let application;

  beforeEach(function() {
    application = startApp();
    simpleCounter.visit();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('starts with the right value', function() {
    expect(simpleCounter.counter.numClicks).to.equal('0');
  });

  describe('clicking the increment button', function() {
    beforeEach(function() {
      simpleCounter.counter.increment();
    });

    it('increases the value by 1', function() {
      expect(simpleCounter.counter.numClicks).to.equal('1');
    });

    describe('clicking the decrement button', function() {
      beforeEach(function() {
        simpleCounter.counter.decrement();
      });

      it('goes back to 0', function() {
        expect(simpleCounter.counter.numClicks).to.equal('0');
      });
    });
  });

  describe('clicking the decrement button', function() {
    beforeEach(function() {
      simpleCounter.counter.decrement();
    });

    it('decreases the value by 1', function() {
      expect(simpleCounter.counter.numClicks).to.equal('-1');
    });
  });
});
