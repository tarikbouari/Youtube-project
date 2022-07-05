


/* Set the width of the side navigation to 250px */
function openNav(){
  document.getElementById("navslide").style.width = "260px";
  document.getElementById("navslide").style.transition = ".5s";
}

/* Set the width of the side navigation to 0 */

function closeNav(){
   
   document.getElementById("navslide").style.width ="0px";
   document.getElementById("navslide").style.transition = ".5s";
}


// browser would get acess to the javascript code when the page will finish loading.
// document.addEventListener('DOMcontentloaded', () =>{


const pressMoon = document.querySelector(".mode-switch");


pressMoon.addEventListener('click', () => {

  document.documentElement.classList.toggle('gray');
  pressMoon.classList.toggle('moon');
  

});


// });