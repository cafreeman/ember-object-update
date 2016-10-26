import Ember from 'ember';
import assign from 'ember-assign-polyfill';

const { get, setProperties } = Ember;

// Usage: update(person, 'name', (name) => name.toUpperCase())
export default function update(obj, key, updateFn) {
  let property = get(obj, key);
  let newValue = updateFn(property);
  let newObject = assign({}, obj, { [key]: newValue });
  setProperties(obj, newObject);
}
