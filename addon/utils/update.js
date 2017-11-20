import { set, get } from '@ember/object';

// Usage: update(person, 'name', (name) => name.toUpperCase())
export default function update(obj, key, updateFn) {
  let property = get(obj, key);
  let newValue = updateFn(property);
  set(obj, key, newValue);
  return newValue;
}
