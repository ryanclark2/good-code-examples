// jshint nonew: false
'use strict';

Phoenix.Views['password_expired-show'] = Backbone.View.extend({
  initialize: function() {
    $('.toggle_password').each(function(index, element) {
      new Phoenix.Views.passwordField({el: element});
    });
  }
});
