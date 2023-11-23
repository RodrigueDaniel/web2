const menu = document.querySelector('#mobile-menu')
const menuLinks =document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);

//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home_page')
    const eventsMenu = document.querySelector('#events_page')
    const galleryMenu = document.querySelector('#gallery_page')
    const contactMenu = document.querySelector('#contacts_page')
    let scrollPos = window.scrollY
    console.log(scrollPos)

    //adds'highlight' class to my menu items        //when the width is less than 960 or 960 we get hamburger menu so in this case we dont want to highlight the opt

    if(window.innerWidth > 960 && scrollPos < 600)  { 
        homeMenu.classList.add('highlight')
        eventsMenu.classList.remove('highlight')
        return
    }  else if(window.innerWidth > 960 && scrollPos < 1400)  {
        eventsMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        galleryMenu.classList.remove('highlight')
        return
    }  else if(window.innerWidth > 960 && scrollPos < 2345)  {
        galleryMenu.classList.add('highlight')
        eventsMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')
        return
    }  else if(window.innerWidth > 960 && scrollPos < 4858)  {
        contactMenu.classList.add('highlight')
        galleryMenu.classList.remove('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll',highlightMenu)
window.addEventListener('click',highlightMenu)

//close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 700 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click',hideMobileMenu)
navLogo.addEventListener('click',hideMobileMenu)


// const viewMore = document.querySelector('#view-more');
// let currentItems = 4;
// viewMore.add('click',(e) => {
//     const elementList = [document.querySelectorAll('.gallery_wrapper .gallery_card  .gallery_card_img')];
//     e.target.classList.add('show-loader');

//     for (let i = currentItems; i < currentItems + 8; i++) {
//         setTimeout( function() {
//             e.target.classList.remove('show-loader');
//             if(elementList[i]) {
//                 elementList[i].style.display = 'flex';
//             }
//         }, 3000)
//     }
//     currentItems +=8;

//     // hide view more button after fully loaded
//     if(currentItems >= elementList.length) {
//         event.target.classList.add('loaded');
//     }
// })



// let  viewMoreBtn = document.querySelector('#view_more');
// let currentItem = 4;

// viewMoreBtn.onclick = () => {
//     let boxes = [...document.querySelectorAll('.gallery_wrapper  .gallery_card ')];
//     for (var i = currentItem; i > currentItem+4; i++) {
//         boxes[i].style.display = 'inline-block';

//     }
//     currentItem +=4;
// }
// viewMoreBtn.addEventListener('click',onclick);



var wraper = document.querySelectorAll('.gallery__card');
var btn = document.querySelector('#view_more');
var currentImg = 4;
btn.addEventListener('click',function () {
    // console.log('Hello World')
    for(var i = currentImg; i < currentImg+4; i++) {
        if(wraper[i]) {
            wraper[i].style.display = 'flex';
        }
    }
    currentImg+=4;
    if(currentImg>=wraper.length) {
        event.target.style.display = 'none'
        
    }

})

// Admin login panel
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const username = form.elements['username'].value;
      const password = form.elements['password'].value;
  
      // You can add additional validation here if needed
  
      // Send the data to the PHP script using AJAX
      const xhr = new XMLHttpRequest();
      xhr.open('POST', form.action, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Handle the response from the server
          console.log(xhr.responseText);
        }
      };
      const data = username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)};
      xhr.send(data);
    });
  });