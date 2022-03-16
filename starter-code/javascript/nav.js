let nav = false;

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    nav = true;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    nav = false
}

let menu = document.getElementById('menu');

menu.addEventListener('click', function() {
    if(nav){
        closeNav()
    }else {
        openNav()
    }
}, false);
