var title = document.querySelector('.mainContainer__infoBlockName');
var letter = title.innerText;
var letters = letter.split('');

console.log(letters);

// letters.forEach(elem => {
//     elem.addEventListener('mouseenter', function(){
//         micron.getEle(elem).interaction("squeeze").duration(".45").timing("ease-out");
//     });
// });

title.addEventListener('mouseenter', function(){
    titleAnimate();
});

function titleAnimate(){
    micron.getEle(".mainContainer__infoBlockNameTitle").interaction("squeeze").duration(".45").timing("ease-out");
}

function animate(){
    micron.getEle(".mainContainer__infoBlockNameTitle").interaction("tada").duration(".45").timing("ease-out");
}

animate();

