function animateMenu(x) {
    x.classList.toggle("change");
  }

$('.container').on('click', (e) => {
    e.preventDefault();
    $('li').slideToggle(600);
})

$(document).ready(function() {
    if($(window).width() >= 541) {
        $('li').show();
    }
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 2000);
});

$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $(".project-section").offset().top
    }, 2000);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
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

