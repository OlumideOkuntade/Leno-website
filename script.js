// mobile menu
document.addEventListener('DOMContentLoaded',function(){
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    toggleButton.addEventListener('click',function(){
        mobileMenu.classList.toggle('active')
    });
});
// navigation scroll
const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function(){
    if(window.scrollY > 0){
        navbar.classList.add('navbar--scroll');
    }else{
        navbar.classList.remove('navbar--scroll'); 
    }
})
// Video model
const modal = document.querySelector('#videoModal');
const videoButton = document.querySelector('.preview__video-button');
const closeButton = document.querySelector('.modal__close-button');
const videoPlayer = document.querySelector('#videoPlayer');
videoButton.addEventListener('click',function(){
    modal.style.display =' block'
    videoPlayer.src = "https://www.youtube.com/embed/iiOHqmmjdGk";
});
closeButton.addEventListener('click',function(){
modal.style.display ='none'});
window.addEventListener('click',function(event){
   if(event.target == modal){
        modal.style.display ='none'}
});

    

 