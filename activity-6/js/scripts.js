//Activity-6
//Array to store messages
var messages = [];
var messageElArray = [];

//Message Type look-up object.  
//Similar to enum
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

//Seed data
var data = [
    {
        type: messageType.out,
        user: 'Steve',
        message: 'Hey, wanna get lunch?'
    },
    {
        type: messageType.in,
        user: 'Joe',
        message: 'I do not!'
    },
    {
        type: messageType.out,
        user: 'Steve',
        message: "What the heck Joe?!?!"
    }
];

//Message constructor function
function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
}

//Function to create and return an element for the supplied message
function createMessageElement(message){
    //Create text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message);
    
    //Create the element and add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //Add a class using the message type
    messageEl.className = message.type;

    return messageEl;
    }

    //Button click event handler to add a new message
    function addMessageHandler(event){
        var user, type;
        var messageInput = document.getElementById('message-input');
        var messagesContainerEl = document.getElementById('message-container');

    //Determine message type and set message variables accordingly
    switch(event.target.id){
        case 'send-button':
            user = 'Steve';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Joe';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }
        
    //Create new message
    if(messageInput.value != ''){
        var message = new Message(type, user, messageInput.value);
        //messages.push(message);

        //Create a message element
        var el = createMessageElement(message);

        //Add the message element to the DOM
        //Add message element to array
        messageElArray.push(messagesContainerEl.appendChild(el));

        //Reset input
        messageInput.value = '';
        
        //Removes oldest message after 4 messages have been posted
        if(messageElArray.length > 4){
        var select = document.getElementById('message-container');
        select.removeChild(select.firstChild);
        }
    } 
}

//Load seed data from data array
function loadSeedData(){
    for (var i = 0; i < data.length; i++){
    var message = new Message(data[i].type, data[i].user, data[i].message);
    messages.push(message);
    }

//Load view with pre-loaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++){
        var message = messages[i];
        var el = createMessageElement(message);
        messagesContainerEl.appendChild(el)
    }
};

var init = function(){
    //Wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
    
    //Load seed data from data array
    loadSeedData();
    
};

init();

//Animate cat pic and move to the right
var catEl = document.getElementById("cat");

var startTime = new Date().getTime();
var walkTheCat = function () {
    var currTime = new Date().getTime();
    var secondsElapsed = ((currTime - startTime) / 1000);
    var newLeft = 0 + secondsElapsed * 80;//Moves 80px a second to the right from css property 'left'
    catEl.style.left = newLeft + "px";
    if (newLeft < 800) {
        window.requestAnimationFrame(walkTheCat);
    }
};

walkTheCat();