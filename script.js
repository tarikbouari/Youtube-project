
// browser would get acess to the javascript code when th page finish loading
document.addEventListener('DOMcontentloaded', () =>{


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


const pressMoon = document.querySelector("svg");
const page = document.querySelector("body")

document.addEventListener('click', () => {
  pressMoon.classList.toggle('moon');
  

});


});