(function(win, doc, $, undefined) {
  'use strict';

  // Don't run if jQuery isn't loaded
  if (typeof window.jQuery === 'undefined') {
    return;
  }

  var _rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  $.getScript('//cdnjs.cloudflare.com/ajax/libs/Faker/0.7.2/MinFaker.js')
  .done(function() {
    var FormData = function(faker) {

      this.faker     = faker;

      this.randomWord = faker.Internet.domainWord();

      this.email     = 'fake_' + this.randomWord;
      this.email     += _rand(100,9999);

      this.name      = faker.Name.findName();

      this.address1  = faker.Address.streetAddress();
      this.city      = faker.Address.city();
      this.state     = faker.random.br_state_abbr();
      this.zip       = faker.Address.zipCode();

    };
  })
  .fail(function() {
    win.console.error('ERROR: FakerJS not loaded!');
  });

}(window, window.document, window.jQuery));