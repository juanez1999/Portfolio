var arrow = document.querySelector('.mainContainer__projectItemArrow');
var state = 0;
var titleProject = document.querySelector('.titleProject');
var number = document.querySelector('.mainContainer__projectStateNumber');

const carrousel = document.querySelector('.carrousel');
const carrouselStripe = document.querySelector('.carrousel__stripe');
let current = 0;

function handleNextSlide () {
    const project = document.querySelector('.mainContainer__projectItem');

    current++;
    if(current >= carrouselStripe.children.length) {
        current = 0;
    }
    number.innerHTML = current+1;
    const height = project.clientHeight;
    carrouselStripe.style.transform = 'translate(0px, -' + (height * current) + 'px)';
    animation();
}

arrow.addEventListener('click', handleNextSlide);

$(document).bind('mousewheel', function(e) {
    handleNextSlide();
});