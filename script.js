const menuOpenButton= document.querySelector("#menu-open-button");
const menuCloseButton= document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",() => {
    // Toggle menu visible 
    document.body.classList.toggle("show-mobile-menu");


})
// close menu when the close button are clicked 
menuCloseButton.addEventListener("click",() => menuOpenButton.click ());