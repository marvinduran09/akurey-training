import { HAMBURGER_MENU_SHOW, HAMBURGER_MENU_HIDE, OPACITY_SHOW,
     OPACITY_HIDE, NOT_INITIALIZED, NONE, BLOCK, INLINE_BLOCK } from "../utils/constants.js";
import { isInReadAllMode } from "../utils/functions.js";

export function hamburgerMenu() {

    const sinopsisImg = document.getElementById("sinopsis-img");
    const menuOptions = document.getElementById("menu__options");
    const menuLocation = menuOptions.style.left;

    const hamburgerIcon = document.getElementById("menu__hamburger-icon");
    const hamburgerXIcon = document.getElementById("menu__hamburger-x-icon");

    const readMode = document.getElementById("sinopsis__read_mode");
    const sinopsisLogo = document.getElementById("sinopsis__logo");

    if (isHamburgerMenuHidden()) {
        displayHamburgerMenu();
    }
    else {
        hideHamburgerMenu();
    }

    function isHamburgerMenuHidden() {
        return menuLocation === NOT_INITIALIZED || menuLocation === HAMBURGER_MENU_HIDE;
    }

    function displayHamburgerMenu(){
        handleSinopsisImgOpacity(OPACITY_HIDE);
        handleMenuOptionsVisibility(HAMBURGER_MENU_SHOW);
        changeHamburgerIconForXIcon();
        handleSinopsisLogoDisplay(NONE);
    }

    function hideHamburgerMenu(){
        handleSinopsisImgOpacity(OPACITY_SHOW);
        handleMenuOptionsVisibility(HAMBURGER_MENU_HIDE);
        changeXIconForHamburgerIcon();
        handleSinopsisLogoDisplay(BLOCK);
    }

    function changeHamburgerIconForXIcon(){
        hamburgerIcon.style.display = NONE;
        hamburgerXIcon.style.display = INLINE_BLOCK;
    }

    function changeXIconForHamburgerIcon(){
        hamburgerIcon.style.display = INLINE_BLOCK;
        hamburgerXIcon.style.display = NONE;
    }

    function handleMenuOptionsVisibility(visibility){
        menuOptions.style.left = visibility;    
    }

    function handleSinopsisImgOpacity(opacity){
        sinopsisImg.style.opacity = opacity;
    }

    function handleSinopsisLogoDisplay(displayMode){
        if(!isInReadAllMode(readMode)){
            sinopsisLogo.style.display = displayMode;
        }
    }

}