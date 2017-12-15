// Type definitions for ember-object-update 0.5
// Project: https://github.com/cafreeman/ember-object-update
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
// Definitions: https://github.com/cafreeman/ember-object-update
// TypeScript Version: 2.4

import ComputedProperty from '@ember/object/computed';

type ComputedProperties<T> = { [K in keyof T]: ComputedProperty<T[K]> | T[K] };

// function get<T, K extends keyof T>(obj: ComputedProperties<T>, key: K): T[K];

export default function update<T, K extends keyof T>(
  obj: ComputedProperties<T>,
  key: K,
  updateFn: (property: T[K]) => T[K]
): T[K];
