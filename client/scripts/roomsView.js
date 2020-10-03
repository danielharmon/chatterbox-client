var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    Rooms.roomsList.forEach(function(roomname) {

      RoomsView.populateSelect(roomname);
    });
  },
  
  renderRoom: function(string) {
    
    // this.$select.append(string);
    
  },
  
  populateSelect: function(roomname) {
    let $option = $('<option></option>');
    $option.text(roomname);
    this.$select.append($option);
  }

};

