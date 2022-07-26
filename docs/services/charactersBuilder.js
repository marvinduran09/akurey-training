import { createDomElement, classNameToShowXAmountOfItemsInMobile } from "../utils/functions.js"

export function generateCharactersInDom(charactersData){
    const LIMIT_TO_LOAD = 4;
    for(let item = 0; item < LIMIT_TO_LOAD; item++){
        appendCharactersData(charactersData, item);
    }    
}

function appendCharactersData(data, item){
    const body = buildBody(data, item);
    const charactersBody = document.getElementsByClassName("characters-body")[0];
    charactersBody.appendChild(body);
}

function buildBody(data, item){
    const image = buildImage(data, item);
    const h6 = buildH6(data, item);

    const characters_text = buildCharactersText();
    characters_text.appendChild(h6);

    const imgAndText = buildImageAndText(item);
    imgAndText.appendChild(image);
    imgAndText.appendChild(characters_text);

    return imgAndText;
}

function buildImage(data, item){
    const image = createDomElement("img");
    image.className = "characters__img";
    image.src = `./images/${data[item].img}`;
    return image;  
}

function buildH6(data, item){
    const h6 = createDomElement("h6");
    h6.innerHTML = data[item].name;
    return h6;
}

function buildCharactersText(){
    const characters_text = createDomElement("div");
    characters_text.className = "characters__text";
    return characters_text;
}

function buildImageAndText(item){
    const imgAndText = createDomElement("div");
    imgAndText.className = buildBodyName(item);
    return imgAndText;
}

function buildBodyName(item){
    const validator = {
        item, wrapperName: "characters__img-and-text", limit: 1
    };
    return classNameToShowXAmountOfItemsInMobile(validator);            
}




