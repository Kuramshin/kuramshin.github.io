/*
var byline = document.getElementById('byline');     // Find the H2
bylineText = byline.innerHTML;                                      // Get the content of the H2
bylineArr = bylineText.split('');                                   // Split content into array
byline.innerHTML = '';                                                      // Empty current content

var span;                   // Create variables to create elements
var letter;

for(i=0;i<bylineArr.length;i++){                                    // Loop for every letter
    span = document.createElement("span");                    // Create a <span> element
    letter = document.createTextNode(bylineArr[i]);   // Create the letter
    if(bylineArr[i] == ' ') {                                             // If the letter is a space...
        byline.appendChild(letter);                 // ...Add the space without a span
    } else {
        span.appendChild(letter);                       // Add the letter to the span
        byline.appendChild(span);                   // Add the span to the h2
    }
}
*/
// add and remove active class at bottom menu

// Chat

$('.chat-input').on('keypress',function (e) {
    e.preventDefault
    if (e.which == 13) {
        if($(this).val() != ''){
            var chatItem = $(this).val();
            createChatItem(chatItem);
        }else{
            // some validation
        }
    }
});

function createChatItem(text){
    var markup = '<strong class="pull-left primary-font chat-name">Guest</strong><small class="pull-right text-muted"><span class="glyphicon glyphicon-time"></span> 2 mins ago</small> </br> <li class="chat-list-item">'+ text +'</li>';
    $('#chat-list').append(markup);
    $('.chat-input').val('');
};

$('.chat-btn-enter').on('click', function(){

    var data = $('.chat-input').val();

    if(data !== ''){
        createChatItem(data);
    }

    else {
        // some validation
    }
});
