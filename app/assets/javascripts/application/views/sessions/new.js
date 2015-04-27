// jshint nonew: false
'use strict';

Phoenix.Views['sessions-new'] = Backbone.View.extend({
  events: {
    'click .cancel_btn': '_clearLoginForm',
  },

  initialize: function() {
    new Phoenix.Views.passwordField({el: '.toggle_password'});
  },

  _clearLoginForm: function() {
    this._input().val('').blur();
  },

  _input: function() {
    return this.$('input.form_control');
  },

});
