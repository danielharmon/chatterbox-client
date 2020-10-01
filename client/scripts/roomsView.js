var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(string) {


    this.$select.append(string);
    $('body').append(this.$select);

  }

};

