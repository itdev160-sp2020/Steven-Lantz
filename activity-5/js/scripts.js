//Activity 5

/*
* Wrap everything in an IIFE(Immediately Invoked Function Expression) to keep
* our variables constrained to the scope of this function and out of the global scope.
*/
/************************************************** */
/*Not really sure why we're doing this, look this up*/
/************************************************* */
(function(){

/***************************************** 
* Package data ond constructor objects
*****************************************/

//Package data array (simulated data source, such as JSON or database recordset)
var data = [
    {
        name:'1. HTML Snippets',
        description: 'HTML Snippets adds in rich language support for HTML markup,' 
        + 'including snippets, quick info, and descriptions that include whether a tag is deprecated.' 
        ,
        author: 'Author: Mohamed Abusaid',
        url:'https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets',
        downloads: 'Downloads: ' + 3227519,
        stars: 'Stars: ' + 4.5,
        price: 'Price: Free' ,
        selector: 'p1'
    },
    {
        name: '2. Git Lens',
        description: 'The Git Lens extension is truly amazing, it enables you to visualize ' 
        + 'code authorship within VS Code. You can browse and explore the history of a file, ' 
        +'view a git blame annotation for each file line, and even add a changes (diff) hover annotation,' 
        + ' all of which are fully customizable.',
        author: 'Author: Eric Amodio',
        url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
        downloads: 'Downloads: ' + 4670279,
        stars: 'Stars: ' + 5,
        price: 'Price: Free',
        selector: 'p2'
        
    },
    {
        name: '3.' + ' Path Intellisense',
        description: 'The Path Intellisense extension helps to autocomplete filenames. Super useful' 
        + ' when writing out paths in markup, or in any file that has path references.',
        author: 'Author: Christian Kohler',
        url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
        downloads: 'Downloads: ' + 2725757,
        stars: 'Stars: ' + 5,
        price: 'Price: Free',
        selector: 'p3'
    }
];

//Package constructor function
function Package(data){
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.price = data.price;
    this.selector = data.selector;

    this.getFormattedDownloads = function (){
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function (){
        return this.stars.toLocaleString();
    };

    this.getFormattedPrice = function(){
        return this.price.toLocaleString();
    }
}



/*****************************************
 * Utility functions
 ****************************************/

//Return today's date, formatted
var getTodaysDate = function (){
    var today = new Date();
    return today.toDateString();
};

var getHour = function(){
    var time = new Date();
    var n = time.getHours() +":" + time.getMinutes() + ":" + time.getSeconds();
    return n;
}
//Returns DOM element by id
var getEl = function (id){
    return document.getElementById(id);
}

/*
*Write's the package object's data to the appropriate
*DOM elements utilizing the package selector property.
*@param {Package} package Package object
*@return {void}
*/
var writePackageInfo = function (package){
    //Get reference to DOM elements
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');
    priceEl = getEl(selector + '-price');

    //Write package data to DOM elements
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    priceEl.textContent = package.getFormattedPrice();
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
}

/********************************************
 * Utilize package data and constructor objects to
 * construct each package, then add package data to
 * the page via DOM functions.
 ********************************************/

//Write date
dateEl = document.getElementById('date');
dateEl.textContent = getTodaysDate();

//Write time
timeEl = document.getElementById('time');
timeEl.textContent = getHour();
/*
 *Write package data 
 * 
 */

for(var i = 0; i < data.length; i++){
     var package = new Package(data[i]);
     writePackageInfo(package);
 }

}());