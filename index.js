function animateMenu(x) {
    x.classList.toggle("change");
  }

$('.container').on('click', (e) => {
    e.preventDefault();
    $('li').toggle();
})