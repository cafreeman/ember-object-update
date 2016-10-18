import Ember from 'ember';
import layout from '../templates/components/array-multiplier';
import update from 'ember-object-update/utils/update';

export default Ember.Component.extend({
  layout,

  classNames: ['array-multiplier'],

  multiplier: 0,

  init() {
    this._super(...arguments);
    this.set('collection', [1, 2, 3]);
  },

  actions: {
    multiply(multiplier) {
      update(this, 'collection', collection => collection.map(v => v * multiplier));
    }
  }
});
