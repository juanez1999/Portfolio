// var title = document.querySelector('.mainContainer__infoBlockNameTitle');
// var secondtitle = document.querySelector('.mainContainer__infoBlockName2Title');

// title.addEventListener('mouseenter', function(){
//     titleAnimate();
// });

// secondtitle.addEventListener('mouseenter', function(){
//     secondtitleAnimate();
// });

// function titleAnimate(){
//     micron.getEle(".mainContainer__infoBlockNameTitle").interaction("tada").duration(".45").timing("ease-out");
// }

// function secondtitleAnimate(){
//     micron.getEle(".mainContainer__infoBlockName2Title").interaction("tada").duration(".45").timing("ease-out");
// }

// function animate(){
//     micron.getEle(".mainContainer__infoBlockNameTitle").interaction("tada").duration(".45").timing("ease-out");
//     micron.getEle(".mainContainer__infoBlockName2Title").interaction("tada").duration(".45").timing("ease-out");
// }

// animate();

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

