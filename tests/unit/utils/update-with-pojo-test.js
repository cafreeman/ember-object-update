/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  beforeEach,
  it
} from 'mocha';
import update from 'ember-update/utils/update';
import Ember from 'ember';

const { get } = Ember;

describe('update basic POJO', function() {
  let simpleObj;
  beforeEach(function() {
    simpleObj = {
      firstName: "John",
      lastName: "Doe",
      someBoolean: false
    };
  });

  it('updates a string property given a function', function() {
    update(simpleObj, 'firstName', name => name.toUpperCase());
    expect(get(simpleObj, 'firstName')).to.equal('JOHN');
    expect(get(simpleObj, 'lastName')).to.equal('Doe');
    expect(get(simpleObj, 'someBoolean')).to.be.false;
  });

  it('updates a boolean property', function() {
    update(simpleObj, 'someBoolean', x => !x);
    expect(get(simpleObj, 'someBoolean')).to.be.true;
    expect(get(simpleObj, 'firstName')).to.equal('John');
    expect(get(simpleObj, 'lastName')).to.equal('Doe');
  });

it("can set a root-level property that doesn't already exist", function() {
    update(simpleObj, 'newProperty', () => 123);
    expect(get(simpleObj, 'newProperty')).to.equal(123);
  });
});

describe('update with a nested POJO', function() {
  let nestedObj;
  beforeEach(function() {
    nestedObj = { a: { b: { c: 2 } } };
  });

  it('can update a nested property', function() {
    let expected = { a: { b: { c: 4 } } };
    update(nestedObj, 'a.b.c', v => v * 2);
    expect(nestedObj).to.deep.equal(expected);
  });

  it("can set a nested property that doesn't already exist", function() {
    let expected = { a: { b: { c: 2, d: "I'm here" } } };
    update(nestedObj, 'a.b.d', () => "I'm here");
    expect(nestedObj).to.deep.equal(expected);
  });
});

describe('update with a POJO and arrays', function() {
  let obj;

  beforeEach(function() {
  obj = {
      a: [1, 2, 3]
    };
  });

  it('can update an entire array property with a function', function() {
    update(obj, 'a', a => a.map(v => v * 2));
    expect(get(obj, 'a')).to.deep.equal([2, 4, 6]);
  });

  it('can update a single element in an array property', function() {
    update(obj, 'a.1', v => v + 1);
    expect(get(obj, 'a')).to.deep.equal([1, 3, 3]);
  });
});
