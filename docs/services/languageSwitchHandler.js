import { translate } from "../api/translationApi.js";

export function languageSwitch(targetLanguage){
    const textToTranslate = getListOfTextToTranslate();
    applyTranslation(textToTranslate, targetLanguage);
    switchLanguageInUI(targetLanguage);
}

function getListOfTextToTranslate(){
    const listOfTextToTranslate = [];
    const sinopsisDescription = document.getElementsByClassName("sinopsis-text__description");
    const sinopsisDescriptionReadMore = document.getElementsByClassName("sinopsis-text__description-read-more");
    const mistObjectDescription = document.getElementsByClassName("mist-object-description");
    listOfTextToTranslate.push(sinopsisDescription);
    listOfTextToTranslate.push(sinopsisDescriptionReadMore);
    listOfTextToTranslate.push(mistObjectDescription);
    return listOfTextToTranslate;
}

async function applyTranslation(textToTranslate, targetLanguage){
    const sourceLanguage = getSourceLanguage(targetLanguage);
    for(let position = 0; position < textToTranslate.length; position++){
        for(let item = 0; item < textToTranslate[position].length; item ++){
            const data = await translate(textToTranslate[position][item].innerText, sourceLanguage, targetLanguage);
            const translation = data.translatedText;
            textToTranslate[position][item].innerHTML = translation;
        }
    }
}

function switchLanguageInUI(targetLanguage){
    const usaFlag = document.getElementsByClassName("menu__link-usa")[0];
    const spaFlag = document.getElementsByClassName("menu__link-spa")[0];
    if(translateToEnglish(targetLanguage)){
        activateEnglishFlag(usaFlag, spaFlag);  
    }
    else {
        activateSpanishFlag(usaFlag, spaFlag);
    }
}

function getSourceLanguage(targetLanguage){
    return targetLanguage === "es" ? "en": "es";
}

function translateToEnglish(targetLanguage){
    return targetLanguage === "en";      
}

function activateEnglishFlag(usaFlag, spaFlag){
    usaFlag.style.backgroundColor = "#ECECEC";
    spaFlag.style.backgroundColor = "#FFFFFF";   
}

function activateSpanishFlag(usaFlag, spaFlag){
    usaFlag.style.backgroundColor = "#FFFFFF";
    spaFlag.style.backgroundColor = "#ECECEC";
}