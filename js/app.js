// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const navIntro = document.querySelector('.nav-intro');
//     const navWay = document.querySelector('.nav-way');

//     burger.addEventListener('click', () => {
//         navIntro.classList.toggle('nav-active');
//     });
// }
// navSlide();

// import dotenv from 'dotenv';
// dotenv.config();
// require('dotenv').config();
// console.log(process.env.MAP_FR_KEY);



if (document.documentElement.lang.toLowerCase() === "en") {
  $(function(){
    $("#nav-placeholder").load("/en/nav.html");
  });
} else if (document.documentElement.lang.toLowerCase() === "fr") {
  $(function(){
    $("#nav-placeholder").load("/fr/nav.html");
  });
} else if (document.documentElement.lang.toLowerCase() === "kr") {
  $(function(){
    $("#nav-placeholder").load("/kr/nav.html");
  });
}

function regionsInCity(x) {
  var x = document.getElementsByClassName("footer-regions")[0];
  var y = document.querySelector("h2");
  // if (x.style.display === "flex" && y.style.display === "block") {   
  //   x.style.display = "none";
  //   y.style.display = "none";
  // } else {
  //   x.style.display = "flex";
  //   y.style.display = "block";
  // }
  if (window.innerWidth < 700) {  
    if (x.style.display === "block" && y.style.display === "block") {   
      x.style.display = "none";
      y.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "block";
    }
  } else {
    if (x.style.display === "flex" && y.style.display === "flex") {   
      x.style.display = "none";
      y.style.display = "none";
    } else {
      x.style.display = "flex";
      y.style.display = "flex";
    }
  }
}

function writingsInCity(x) {
  var x = document.getElementsByClassName("writings")[0];
  // var y = document.querySelector("h2");
  // if (x.style.display === "flex" && y.style.display === "block") {   
  //   x.style.display = "none";
  //   y.style.display = "none";
  // } else {
  //   x.style.display = "flex";
  //   y.style.display = "block";
  // }
  if (window.innerWidth < 700) {  
    if (x.style.display === "block") {   
      x.style.display = "none";
      // y.style.display = "none";
    } else {
      x.style.display = "block";
      // y.style.display = "block";
    }
  } else {
    if (x.style.display === "flex") {   
      x.style.display = "none";
      // y.style.display = "none";
    } else {
      x.style.display = "flex";
      // y.style.display = "flex";
    }
  }
}




//bullets 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.innerWidth < 700) {  
    // // var dh = document.body.scrollHeight; //2118
    // var thr1 = document.body.scrollHeight * 0.5 ;  
    // var thr2 = document.body.scrollHeight * 0.9 ; 
    // if ( (document.body.scrollTop < thr2 && document.body.scrollTop > thr1) || (document.documentElement.scrollTop < thr2 && document.documentElement.scrollTop > thr1) ) {
    // // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
    //   document.getElementsByClassName("bullets")[0].style.opacity = "1" ;  //color
    // } else {
    //   document.getElementsByClassName("bullets")[0].style.opacity = "0";
    // }
  }
  else {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementsByClassName("bullets")[0].style.opacity = "0" ;
    } else {
      document.getElementsByClassName("bullets")[0].style.opacity = "1";
    }
  }

 }


// encadre
function on() {
  if (window.innerWidth < 700) {  
    document.getElementsByClassName("overlay")[0].style.display = "flex";
    // document.getElementsByClassName("content")[0].style.position = "fixed";
    // document.getElementsByClassName("bullets")[0].style.position = "fixed";
    window.onscroll = function() {};
    $(document).off(moveToPage());
  }
  else {
    document.getElementsByClassName("overlay")[0].style.display = "flex";
    document.getElementsByClassName("content")[0].style.position = "fixed";
    document.getElementsByClassName("bullets")[0].style.position = "fixed";
    window.onscroll = function() {};
    $(document).off(moveToPage());
  }
}

function off() {
  if (window.innerWidth < 700) {  
    document.getElementsByClassName("overlay")[0].style.display = "none";
    document.getElementsByClassName("content")[0].style.position = "relative";
    document.getElementsByClassName("bullets")[0].style.position = "relative";
    window.onscroll = function() {scrollFunction()};
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    $(document).on(moveToPage());
  }
  else {
    document.getElementsByClassName("overlay")[0].style.display = "none";
    document.getElementsByClassName("content")[0].style.position = "relative";
    document.getElementsByClassName("bullets")[0].style.position = "absolute";
    window.onscroll = function() {scrollFunction()};
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $(document).on(moveToPage());
  }
}


function burger(x) {
  x.classList.toggle("change");
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




function closePopup(x) {
  var y = document.getElementsByClassName("popup")[0];
  // y.style.display = "none";
  
  if (y.style.display === "block") {   
    y.style.display = "none";
    console.log('popup');
  } else {
    y.style.display = "block";
  }
  // if (y.style.position === "fixed") {   
  //   y.style.position = "relative";
  //   console.log('popup');
  // } 
}



// /* 새로고침 */ 
// window.onbeforeunload = function () {
//   window.scrollTo(0,0);
// };

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  window.scrollTo(0,0);
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}