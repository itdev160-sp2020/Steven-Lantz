//Activity 4
//Welcome message
var user = 'Steve. ';
var salutation = 'Hello, ';
var greeting = salutation + user + ' Here are the latest Atom reviews';
var greetingEl = document.getElementById("greeting");//Method is getElementID 
//referencing id we made in html file
//greetingEL-> convention is to add EL at the end of variable names when getting element by id
//term document is reference to your page; object representation of page

greetingEl.textContent = greeting;

//product price
var price = 20, 
     studentDiscount = .10,
     studentPrice = price - (price * studentDiscount),
     priceEl = document.getElementById('price'),//Referencing price id; To property of 'price', must call priceEl.textContent
     studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);//toFixed function is number of zeros after decimal

//Messing around
/* var secondGreeting = 'I\'m changing this greeting';
var secondGreetingEl = document.getElementById('nick');
secondGreetingEl.textContent = secondGreeting; */

function changeText(){
     var x = document.getElementById('nick');
     var newMessage = "I replaced the text here";
x.textContent = newMessage;
}
