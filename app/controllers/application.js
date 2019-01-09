import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

  words: computed('text', function() {
    return this.text.split(' ');
  }),

  actions: {
    viewWords() {
      this.set('viewWords', true);
    }
  }
});
