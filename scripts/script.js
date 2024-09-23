// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
    ];

// Part 1
// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector('main')
// console.log(mainEl)

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)'
// setting background color using custom CSS properties


// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr')


// Part 2
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById(`top-menu`)
// console.log(topMenuEl)

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%'

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around')


// Part 3
// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) => {
    // console.log(link)

    // Create an <a> element. .createElment()
    let newLink = document.createElement(`a`)

    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    newLink.setAttribute(`href`, link.href)
    // console.log(newLink)

    // Set the new element's content to the value of the text property of the "link" object.
    newLink.textContent= link.text;

    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(newLink)
});


// DOM Manipulation (Part Two)
// Part 3: Creating the Submenu
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById(`sub-menu`);

// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';
// subMenuEl.style.position: absolute

// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';


// Part 4: Adding Menu Interaction
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = document.querySelector('a')

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', topClick)

    // The first line of code of the event listener function should call the event object's preventDefault() method.
    function topClick(event){
        event.preventDefault();

        // The second line of code of the function should immediately return if the element clicked was not an <a> element.
        // let c = event.type
        
        console.log(event.srcElement.localName)
        if(event.srcElement.localName !== 'a')  return;
        
        // Log the content of the <a> to verify the handler is working.
        // console.log(topMenuLinks)
        

        // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.

        let srcLocation = event.srcElement.localName
        if(srcLocation.getAttrbute('class', 'a')){
            srcLocation.forEach(srcLocation => {
                srcLocation.addEventListener('click', () => {
                    document.querySelector('links');
                
                    classList.remove('active');
                    srcLocation.classList.add('active');
                    subMenuEl.style.top = '0';
                        
                })
            })
            console.log(srcLocation)
        }

    }
   
  

// Part 5: Adding Submenu Interaction
// Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):

    // If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
    subMenuEl.style.top = '100';

    // Otherwise, set the CSS top property of subMenuEl to 0.
        // Hint: Caching the "link" object will come in handy for passing its subLinks array later.
    subMenuEl.style.top = '0';

    

// Clear the current contents of subMenuEl.
subMenuEl = document.getElementById('sub-menu');
subMenuEl.innerHTML = '';

// Iterate over the subLinks array, passed as an argument, and for each "link" object:


    // Create an <a> element.


    // Add an href attribute to the <a>, with the value set by the href property of the "link" object.


    // Set the element's content to the value of the text property of the "link" object.
                
                
    // Append the new element to the subMenuEl.




