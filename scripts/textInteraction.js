$(document).ready(function() {
    $(".title").lettering();
});


$(document).ready(function() {
    animation();
});

function animation() {
    var title1 = new TimelineMax();
    title1.staggerFromTo(".title span", 0.5, 
    {ease: Back.easeOut.config(0.1), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(0.3), opacity: 1, bottom: 0}, 0.02);
}


