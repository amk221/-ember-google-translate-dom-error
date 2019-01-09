import Controller from '@ember/controller';

export default Controller.extend({
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit http://emberjs.com',

  actions: {
    viewMore() {
      this.set('viewMore', true);
    }
  }
});
