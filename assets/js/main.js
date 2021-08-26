let 
    header = document.querySelector('#header'),
    navbarLogo = document.querySelector('#logo'),
    menuToggle = document.querySelector('#menu-toggle'),
    navBar = document.querySelector('#navbar'),
    navLink = document.querySelectorAll('.nav_link'),

    addToCard = document.querySelectorAll('.add_to_card'),
    shopList = document.querySelector('#shop-list'),
    like = document.querySelectorAll('#like');



/* ===== ON SCROLLING ===== */
window.onscroll = function(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        header.classList.add('onscroll');
    }
    else{
        header.classList.remove('onscroll');
    }
}


/* ===== CLICK ON THE LOGO ===== */
navbarLogo.onclick = function(){
    for(i=0; i<navLink.length; i++){
        for(item of navLink){
            item.classList.remove('active');
        }
        navLink[0].classList.add('active');
    }
}


/* ===== CLICK ON THE NAVBAR ITEMS ===== */
for(i=0; i<navLink.length; i++){
    navLink[i].onclick = function(){
        for(item of navLink){
            item.classList.remove('active');
        }

        this.classList.add('active');
    }
}

/* ===== CLICK ON THE TOGGLE MENU ===== */
menuToggle.onclick = function(){
    this.classList.toggle('fa-times')
    navBar.classList.toggle('showed');
}


/* ===== CLICK ON THE LIKE PRODUCT BUTTON ===== */
for(i=0; i<like.length; i++){
    like[i].onclick = function(){
        this.classList.toggle('fas');
    }
}


/* ===== CLICK ON SHOP PRODUCT BUTTON ===== */
let products = 1;

for(i=0; i<addToCard.length; i++){
    addToCard[i].onclick = function(){
        shopList.textContent = products++;
        shopList.classList.add('added');
    }
}