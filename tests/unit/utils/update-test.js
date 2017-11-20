/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  beforeEach,
  it
} from 'mocha';
import update from 'ember-object-update';
import Ember from 'ember';

describe('update with a basic ember object', function() {
  let emberObj;
  beforeEach(function() {
    emberObj = Ember.Object.create({
      firstName: "John",
      lastName: "Doe",
      someBoolean: false
    });
  });

  it('updates a string property given a function', function() {
    const updated = update(emberObj, 'firstName', name => name.toUpperCase());
    expect(updated).to.equal('JOHN')
    expect(emberObj.get('firstName')).to.equal('JOHN');
    expect(emberObj.get('lastName')).to.equal('Doe');
    expect(emberObj.get('someBoolean')).to.be.false;
  });

  it('updates a boolean property', function() {
    const updated = update(emberObj, 'someBoolean', x => !x);
    expect(updated).to.be.true;
    expect(emberObj.get('someBoolean')).to.be.true;
    expect(emberObj.get('firstName')).to.equal('John');
    expect(emberObj.get('lastName')).to.equal('Doe');
  });

  it("can set a root-level property that doesn't already exist", function() {
    const updated = update(emberObj, 'newProperty', () => 123);
    expect(updated).to.equal(123);
    expect(emberObj.get('newProperty')).to.equal(123);
  });
});

describe('update with a nested ember object', function() {
  let nestedObj;
  beforeEach(function() {
    nestedObj = Ember.Object.create({ a: { b: { c: 2 } } });
  });

  it('can update a nested property', function() {
    let expected = Ember.Object.create({ a: { b: { c: 4 } } });
    const updated = update(nestedObj, 'a.b.c', v => v * 2);
    expect(updated).to.equal(4);
    expect(nestedObj).to.deep.equal(expected);
  });

  it("can set a nested property that doesn't already exist", function() {
    let expected = Ember.Object.create({ a: { b: { c: 2, d: "I'm here" } } })
    const updated = update(nestedObj, 'a.b.d', () => "I'm here");
    expect(updated).to.equal("I'm here");
    expect(nestedObj).to.deep.equal(expected);
  });
});

describe('update with an ember object and arrays', function() {
  let obj;

  beforeEach(function() {
  obj = Ember.Object.create({
      a: [1, 2, 3]
    });
  });

  it('can update an entire array property with a function', function() {
    const updated = update(obj, 'a', a => a.map(v => v * 2));
    expect(updated).to.deep.equal([2, 4, 6]);
    expect(obj.get('a')).to.deep.equal([2, 4, 6]);
  });

  it('can update a single element in an array property', function() {
    const updated = update(obj, 'a.1', v => v + 1);
    expect(updated).to.deep.equal(3);
    expect(obj.get('a')).to.deep.equal([1, 3, 3]);
  });
});
