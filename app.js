
var menuBar = document.getElementById('top-menu');


     menuBar.addEventListener('click', openNav);

var cancelIcon = document.getElementById('closebtn');

cancelIcon.addEventListener('click', closeNav);


function openNav ()
{
    var show = document.getElementById('myNav');
    show.style.width = '100%';
}

function closeNav ()
{
    var hide = document.getElementById('myNav');
    hide.style.width = '0%';
}

var all = document.getElementsByClassName('overlay-content');


    for (var i = 0; i < all.length; i++) {
        all[0].addEventListener('click', closeNav);
   
    }









