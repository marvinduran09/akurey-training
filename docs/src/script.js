window.onload = function() {
    const READ_ALL = "Read All";
    const READ_LESS = "Read Less";
    const BLOCK = "block";
    const NONE = "none"
    const INLINE_BLOCK = "inline-block";
    const NOT_INITIALIZED = "";
    const HAMBURGER_MENU_SHOW = 0;
    const HAMBURGER_MENU_HIDDEN = "-100%";
    const OPACITY_SHOW = 1;
    const OPACITY_HIDE = 0;

    const read = document.querySelector(".sinosis-text__read-option");
    read.addEventListener("click", switchReadMode);

    const menuHamburger = document.querySelector(".menu__hamburger");
    menuHamburger.addEventListener("click", hamburgerMenu);

    function switchReadMode() {
        const readMode = document.getElementById("sinopsis__read_mode");
        const sinopsisLogo = document.getElementById("sinopsis__logo");
        const sinopsisReadMoreContent = document.getElementById("sinopsis__read_more_content");
        const islandHearts = document.getElementsByClassName("islands__heart");
        const mistObject = document.getElementById("mist-object");
        
        if(isInReadAllMode(readMode)){
            switchToReadLessMode();
        } else {
            switchToReadAllMode();
        }
    
        function switchToReadLessMode(){
            sinopsisLogo.style.display = BLOCK;
            sinopsisReadMoreContent.style.display = BLOCK;
            readMode.innerHTML = READ_LESS;
            islandHearts[0].style.display = BLOCK;
            islandHearts[1].style.display = BLOCK;
            mistObject.style.marginBottom = "125px";
        }
    
        function switchToReadAllMode(){
            sinopsisLogo.style.display = NONE;
            sinopsisReadMoreContent.style.display = NONE;
            readMode.innerHTML = READ_ALL;
            islandHearts[0].style.display = NONE;
            islandHearts[1].style.display = NONE;
            mistObject.style.marginBottom = "75px";
        }
    }

    function hamburgerMenu() {
        const sinopsisImg = document.getElementById("sinopsis-img");
        const menuOptions = document.getElementById("menu__options");
        const menuLocation = menuOptions.style.left;

        const hamburgerIcon = document.getElementById("menu__hamburger-icon");
        const hamburgerXIcon = document.getElementById("menu__hamburger-x-icon");

        const readMode = document.getElementById("sinopsis__read_mode");
        const sinopsisLogo = document.getElementById("sinopsis__logo");
        

        if(isHamburgerMenuHidden()){
            displayHamburgerMenu();
        }
        else {
            hideHamburgerMenu();
        }

        function isHamburgerMenuHidden(){
            return menuLocation === NOT_INITIALIZED || menuLocation === HAMBURGER_MENU_HIDDEN;
        }

        function displayHamburgerMenu(){
            sinopsisImg.style.opacity = OPACITY_HIDE;
            menuOptions.style.left = HAMBURGER_MENU_SHOW;
            hamburgerIcon.style.display = NONE;
            hamburgerXIcon.style.display = INLINE_BLOCK;
            sinopsisLogo.style.display = NONE;

            if(!isInReadAllMode(readMode)){
                sinopsisLogo.style.display = NONE;    
            }
        }
        function hideHamburgerMenu(){
            sinopsisImg.style.opacity = OPACITY_SHOW;
            menuOptions.style.left = HAMBURGER_MENU_HIDDEN; 
            hamburgerIcon.style.display = INLINE_BLOCK;
            hamburgerXIcon.style.display = NONE;

            if(!isInReadAllMode(readMode)){
                sinopsisLogo.style.display = BLOCK;
            }
        }
    } 
    
    function isInReadAllMode(readMode){
        return readMode.innerText === READ_ALL;
    }
}