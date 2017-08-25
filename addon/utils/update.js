import Ember from 'ember';

const { get, setProperties, assign } = Ember;

// Usage: update(person, 'name', (name) => name.toUpperCase())
export default function update(obj, key, updateFn) {
  let property = get(obj, key);
  let newValue = updateFn(property);
  let newObject = assign({}, obj, { [key]: newValue });
  setProperties(obj, newObject);
}
