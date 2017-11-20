import $ from 'jquery';

import {
  create,
  visitable,
  fillable,
  clickable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/multiplier'),

  multiplier: {
    scope: '.array-multiplier',

    listItems: () => {
      return $('[data-test-multiplier-list-item]')
        .map((i, v) => parseInt($(v).text()), 10)
        .toArray();
    },

    input: fillable('.array-multiplier-input'),

    calculate: clickable('[data-test-multiplier-button]')
  }
});
