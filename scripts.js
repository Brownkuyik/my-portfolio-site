// on click on the about

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var SideMenu = document.getElementById("SideMenu");

function OpenMenu(){
    SideMenu.style.right = "0"
}

function CloseMenu(){
    SideMenu.style.right = "-200px"
}

// end of the about 


// back to top 

let backtotop = getSelection('.back-to-top')
if (backtotop) {
    function toggleBacktotop() {
        if (window.scrollY > 100){
            backtotop.classList.add('active')
        }
        else{
            backtotop.classList.remove('active')
        }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
}