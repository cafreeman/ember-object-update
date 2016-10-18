import {
  create,
  visitable,
  fillable,
  clickable
} from 'ember-cli-page-object';

import Ember from 'ember';

export default create({
  visit: visitable('/multiplier'),

  multiplier: {
    scope: '.array-multiplier',

    listItems: () => {
      return Ember.$('[data-test-multiplier-list-item]')
        .map((i, v) => parseInt(Ember.$(v).text()), 10)
        .toArray();
    },

    input: fillable('.array-multiplier-input'),

    calculate: clickable('[data-test-multiplier-button]')
  }
});
