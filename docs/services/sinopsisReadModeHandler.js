import { isInReadAllMode } from "../utils/functions.js";
import { READ_ALL, READ_LESS, BLOCK, NONE } from "../utils/constants.js";

export const switchSinopsisReadMode = () => {
    const sinopsisReadMode = document.getElementById("sinopsis__read_mode");
    
    if(isInReadAllMode(sinopsisReadMode)){
        switchToReadLessMode();
    } else {
        switchToReadAllMode();
    }

    function switchToReadLessMode(){
        handleSinopsisContentDisplay(BLOCK);
        handleReadModeTextDisplay(READ_LESS);
        handleIslandHeartsDisplay(BLOCK);
        handleMistObjectMarginBottom("125px");
    }

    function switchToReadAllMode(){
        handleSinopsisContentDisplay(NONE);
        handleReadModeTextDisplay(READ_ALL);
        handleIslandHeartsDisplay(NONE);
        handleMistObjectMarginBottom("75px");
    }

    function handleSinopsisContentDisplay(displayMode){
        const sinopsisLogo = document.getElementById("sinopsis__logo");
        const sinopsisReadMoreContent = document.getElementById("sinopsis__read_more_content");
        sinopsisLogo.style.display = displayMode;
        sinopsisReadMoreContent.style.display = displayMode;
    }

    function handleReadModeTextDisplay(readMode){
        sinopsisReadMode.innerHTML = readMode;
    }

    function handleIslandHeartsDisplay(displayMode){
        const islandHearts = document.getElementsByClassName("islands__heart");
        islandHearts[0].style.display = displayMode;
        islandHearts[1].style.display = displayMode;        
    }

    function handleMistObjectMarginBottom(marginBottom){
        const mistObject = document.getElementById("mist-object");
        mistObject.style.marginBottom = marginBottom;
    }
}