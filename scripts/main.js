var getUrl = window.location.pathname;
console.log(getUrl);

switch (getUrl) {
    case '/Portfolio/index.html':
        var home = document.querySelector('.mainContainer__navImgHome');
        home.classList.add('.mainContainer__navImgHome--active');
        break;

    default:
        break;
}