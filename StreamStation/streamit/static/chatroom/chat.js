$(function() {
    var FADE_TIME = 150; // ms
    var TYPING_TIMER_LENGTH = 400; // ms
    var COLORS = [
        '#e21400', '#91580f', '#f8a700', '#f78b00',
        '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
        '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
    ];

    // Initialize variables
    var $window = $(window);
    var $messages = $('.messages'); // Messages area
    var $inputMessage = $('.inputMessage'); // Input message input box
    var userNames = ["Bryan","Ryan", "Alan", "Dvaid", "Linus", "Kobe"];


    var chatArray = new Array();
    $.get('static/chatroom/chat.txt', function(data){
        chatArray = data.split('\n');
    });

    function getRandomColor() {
        var hash = Math.floor(Math.random() * 100)
        // Calculate color
        var index = Math.abs(hash % COLORS.length);
        return COLORS[index];
    }

    function addMessageElement(parent, el) {
        var $parent = $(parent);
        var $el = $(el);

        $el.hide();
        $parent.append($el);
        $el.fadeIn(FADE_TIME);
        $parent[0].scrollTop = $parent[0].scrollHeight;

    }
    function formatMessage(message) {
        var $usernameDiv = $('<span class="username"/>')
            .text(userNames[Math.floor(Math.random() * 100) % userNames.length])
            .css('color', getRandomColor());
        var $messageBodyDiv = $('<span class="messageBody">')
                .text(message);

        var $messageDiv = $('<li class="message"/>')
                .append($usernameDiv, $messageBodyDiv);
        return $messageDiv;
    }

    (function loop() {
        var rand = Math.round(Math.random() * (1000 - 500)) + 200;
        setTimeout(function() {
                var chat = chatArray[Math.floor(Math.random() * 100) % chatArray.length];
                // console.log(chat);
                addMessageElement($messages, formatMessage(chat));
                if ($messages.children().length > 10) {
                    $messages.find('li:first').remove();
                }
                loop();  
        }, rand);
    }());

});
