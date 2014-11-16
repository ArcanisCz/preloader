window.preloadedFiles = [
    "http://localhost/preloader/app/platform.js",
    "http://localhost/preloader/app/imgs/rc.jpg",
    "http://localhost/preloader/app/imgs/rc_small.jpg",
    "http://localhost/preloader/app/require.js",
    "http://localhost/preloader/app/main.min.js",
    "http://localhost/preloader/app/main.min.css"
];


window.preloadOnComplete = function(){
    document.body.innerHTML += '<x-app></x-app>';
};
