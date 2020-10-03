var MessagesView = {

  roomName: 'All',
  $chats: $('#chats'),

  initialize: function() {
    $('#rooms button').on('click', function() {
      MessagesView.roomName = prompt('Type in your room name:' || 'All');
    });

    this.$chats.empty();
    $('#rooms select').on('change', function() {

      MessagesView.initialize();
    });

    var $selectedRoom = $('#rooms select option:selected').text();
    if ($selectedRoom === 'All') {
      for (let key in Messages) {
        MessagesView.renderMessage(Messages[key]);
      }
    } else {
      for (let key in Messages) {
        if (Messages[key].roomname === $selectedRoom) {
          MessagesView.renderMessage(Messages[key]);
        }
      }
    }

  },

  renderMessage: function(message) {

    this.$chats.append(MessageView.render(message));
  
  }

};












