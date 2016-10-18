import {
  create,
  visitable,
  clickable,
  text
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/'),

  counter: {
    scope: '.simple-counter',

    numClicks: text('[data-test-counter-numclicks]'),

    increment: clickable('[data-test-counter-increment]'),

    decrement: clickable('[data-test-counter-decrement]')
  }
});
