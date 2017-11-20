import Ember from 'ember';

const { get, set } = Ember;

// Usage: update(person, 'name', (name) => name.toUpperCase())
export default function update(obj, key, updateFn) {
  let property = get(obj, key);
  let newValue = updateFn(property);
  set(obj, key, newValue);
  return newValue;
}
