import { switchSinopsisReadMode } from "./services/sinopsisReadModeHandler.js";
import { hamburgerMenu } from "./services/hamburgerMenuHandler.js";
import { placeFetchedOnePieceDataInDom } from "./services/onePieceCategoriesCreationHandler.js";
import { languageSwitch } from "./services/languageSwitchHandler.js";
    
const sinopsisReadMode = document.querySelector(".sinosis-text__read-option");
sinopsisReadMode.addEventListener("click", handleSinopsisReadMode);

const menuHamburger = document.querySelector(".menu__hamburger");
menuHamburger.addEventListener("click", handleHamburgerMenu);

const switchToSpanish = document.querySelector(".menu__link-spa");
switchToSpanish.addEventListener("click", () => {
    handleLanguageSwitch("es");
});
const switchToEnglish = document.querySelector(".menu__link-usa");
switchToEnglish.addEventListener("click", () => {
    handleLanguageSwitch("en");     
})

function handleSinopsisReadMode() {
    switchSinopsisReadMode();
}

function handleHamburgerMenu() {
    hamburgerMenu();
} 

async function handleLanguageSwitch(targetLanguage) {
    languageSwitch(targetLanguage);
}

window.onload = async function consumeRealData() {
    try {
        placeFetchedOnePieceDataInDom();
    }
    catch(exception) {
        console.log(`error: ${exception}`);
    }
}


