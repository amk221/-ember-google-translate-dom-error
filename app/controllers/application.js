import Controller from '@ember/controller';
import { computed } from '@ember/object';
import truncate from '../utils/truncate';

export default Controller.extend({
  text: 'Lorem ipsum http://emberjs.com',
  limit: 5,

  displayText: computed('text', 'limit', 'viewMore', function() {
    if (this.viewMore) {
      return this.text;
    } else {
      return truncate(this.text, this.limit);
    }
  }),

  actions: {
    viewMore() {
      this.set('viewMore', true);
    }
  }
});
