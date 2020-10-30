var arrow = document.querySelector('.mainContainer__projectItemArrow');
var state = 0;
var titleProject = document.querySelector('.titleProject');
var number = document.querySelector('.mainContainer__projectStateNumber');

const carrousel = document.querySelector('.carrousel');
const carrouselStripe = document.querySelector('.carrousel__stripe');
let current = 0;

function handleNextSlide () {
    console.log(carrouselStripe.children.length);

    current++;
    if(current >= carrouselStripe.children.length) {
        current = 0;
    }
    number.innerHTML = current+1;
    const height = carrousel.clientHeight;
    carrouselStripe.style.transform = 'translate(0px, -' + (height * current) + 'px)';
    console.log(current);

}

arrow.addEventListener('click', handleNextSlide);


