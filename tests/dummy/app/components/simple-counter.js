import Ember from 'ember';
import layout from '../templates/components/simple-counter';
import update from 'ember-update/utils/update';

export default Ember.Component.extend({
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
