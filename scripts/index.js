var title = document.querySelector('.mainContainer__infoBlockNameTitle');
var secondtitle = document.querySelector('.mainContainer__infoBlockName2Title');

title.addEventListener('mouseenter', function(){
    titleAnimate();
});

secondtitle.addEventListener('mouseenter', function(){
    secondtitleAnimate();
});

function titleAnimate(){
    micron.getEle(".mainContainer__infoBlockNameTitle").interaction("tada").duration(".45").timing("ease-out");
}

function secondtitleAnimate(){
    micron.getEle(".mainContainer__infoBlockName2Title").interaction("tada").duration(".45").timing("ease-out");
}

function animate(){
    micron.getEle(".mainContainer__infoBlockNameTitle").interaction("tada").duration(".45").timing("ease-out");
    micron.getEle(".mainContainer__infoBlockName2Title").interaction("tada").duration(".45").timing("ease-out");
}

animate();

