import Component from '@ember/component';
import layout from '../templates/components/simple-counter';
import update from 'ember-object-update';

export default Component.extend({
  layout,

  classNames: ['simple-counter'],

  numClicks: 0,

  actions: {
    increment() {
      update(this, 'numClicks', v => v + 1)
    },

    decrement() {
      update(this, 'numClicks', v => v - 1)
    }
  }
});
