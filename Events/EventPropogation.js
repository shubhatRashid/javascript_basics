// EVENT PROPOGATION :

// Event propogation refers to how events propogate in a DOM tree.
// e.g if a div contains a button and an event is added to the button 
// then event will propogate to div as well because when we click button
// we also click div

// EVENT Bubbling
// Events propogate like a bubble i.e from bottom to top of the DOM tree.
// e.g if a button is inside a form which is inside a div and we add the same
// event click to all of them then first the button event then the form event
// and then the div event are fired.

// Event as parameter in callback :
// contains all the information about the event i.e where the event happened
// on which tag it happened and so on it is an object recieved in the callback 
// of the event listerner function.

// Event Target :
// specifies actually where the event was targetted.
// there are three ways to do this :
//  event.target.tagName : remains specific to where button was clicked throughout propogation
//  event.currentTarget   : bubbles up the DOM tree
//  this.tagName    : bubbles up as well

// Event Capturing :
// We can also do reverse of bubbling by capturing the events and firing them top to down
// by using {capture:true} as third parameter in addEventListener function. the event captured will
// be fired first

// Stop Progogation:
// just use event.stopPropogation() in the eventlistener callback function
