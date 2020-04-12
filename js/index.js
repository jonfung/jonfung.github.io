console.log("loaded js");

const card = document.getElementById('card');
const totoro = document.getElementById('totoro');

totoro.addEventListener('animationend', function(e) {
    totoro.classList.remove('animated');
});

card.addEventListener('mouseover', function(e) {
   totoro.classList.add('animated')
});