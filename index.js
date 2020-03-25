function animateMenu(x) {
    x.classList.toggle("change");
  }

$('.container').on('click', (e) => {
    e.preventDefault();
    $('.nav').slideToggle(600);
})


$("#about").click(function(x) {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 2000);
});

$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $(".project-section").offset().top
    }, 2000);
});

$("#acheivements").click(function() {
  $('html, body').animate({
      scrollTop: $(".certifications").offset().top
  }, 2000);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".bit-desk").offset().top
    }, 2000);
});

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    let elm = document.getElementById(eID);
    let y = elm.offsetTop;
    let node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(eID) {
    let startY = currentYPosition();
    let stopY = elmYPosition(eID);
    let distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 50) {
        scrollTo(0, stopY); return;
    }
    let speed = Math.round(distance / 200);
    if (speed >= 50) speed = 50;
    let step = Math.round(distance / 2);
    let leapY = stopY > startY ? startY + step : startY - step;
    let timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( let i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}

let modal = document.getElementById("myModal");
let img = document.getElementById("feedme");
let modalImg = document.getElementById("img1");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
let span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}


let modal2 = document.getElementById("myModal2");
let img2 = document.getElementById("spaced");
let modalImg2 = document.getElementById("img2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
}
let span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function() { 
  modal2.style.display = "none";
}


let modal3 = document.getElementById("myModal3");
let img3 = document.getElementById("quiz");
let modalImg3 = document.getElementById("img3");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
}
let span3 = document.getElementsByClassName("close3")[0];
span3.onclick = function() { 
  modal3.style.display = "none";
}

let modal4 = document.getElementById("myModal4");
let title = document.getElementById("thinkful");
let modalImg4 = document.getElementById("img4");
title.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = "pictures/certifications/thinkful-cert.png";
}
let span4 = document.getElementsByClassName("close4")[0];
span4.onclick = function() { 
  modal4.style.display = "none";
}

let modal5 = document.getElementById("myModal5");
let title2 = document.getElementById("google-a");
let modalImg5 = document.getElementById("img5");
title2.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = "pictures/certifications/google-a-cert.png";
}
let span5 = document.getElementsByClassName("close5")[0];
span5.onclick = function() { 
  modal5.style.display = "none";
}

let modal6 = document.getElementById("myModal6");
let title3 = document.getElementById("google-t");
let modalImg6 = document.getElementById("img6");
title3.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = "pictures/certifications/gtm-cert.png";
}
let span6 = document.getElementsByClassName("close6")[0];
span6.onclick = function() { 
  modal6.style.display = "none";
}

