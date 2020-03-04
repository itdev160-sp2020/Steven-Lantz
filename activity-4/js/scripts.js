//Welcome message
var user = 'Steve';
var salutation = 'Hello, ';
var greeting = salutation + user + 'Here are the latest Atom reviews';
var greetingEl = document.getElementById("greeting");//Method is getElementID 
//referencing id we made in html file
//greetingEL-> convention is to add EL at the end of variable names when getting element by id
//term document is reference to your page; object representation of page

greetingEl.textContent = greeting;//

//product price
var price = 20, 
     studentDiscount = .10,
     studentPrice = price - (price * studentDiscount),
     priceEl = document.getElementById('price'),//Referencing price 
     studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);//toFixed function defined on number type