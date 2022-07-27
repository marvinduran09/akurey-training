import { createDomElement, classNameToShowXAmountOfItemsInMobile } from "../utils/functions.js"

export function generateMistObjectsInDom(mistObjectData){
    const LIMIT_TO_LOAD = 2;
    for(let item = 0; item < LIMIT_TO_LOAD; item++){
        appendMistObjectData(mistObjectData, item);
    }
}

function appendMistObjectData(mistObjectData, item){
    const init = 0;
    let start;
    let end;

    if(item === init){
        start = 0;
        end = 2;
        buildMistObjectDOMAuxiliar(mistObjectData, start, end);
    }
    else {
        start = 2;
        end = 4;
        buildMistObjectDOMAuxiliar(mistObjectData, start, end);
    }
}

function buildMistObjectDOMAuxiliar(data, start, end) {
    const mistObjectBody = buildMistObjectBody();
    
    for(let item = start; item < end; item++){
        const imgAndText = buildImageAndText(item);

        const image = buildImage(data, item);
        imgAndText.appendChild(image);

        const h6 = buildH6(data, item);
        const description = buildDescription(data, item);

        const mistObjectText = buildMistObjectText();
        mistObjectText.appendChild(h6);
        mistObjectText.appendChild(description);

        imgAndText.appendChild(mistObjectText);
        mistObjectBody.appendChild(imgAndText);
    }
    const mistObjectBodies = document.getElementsByClassName("mist-object-bodies")[0];
    mistObjectBodies.appendChild(mistObjectBody);

}

function buildImage(data, item){
    const image = createDomElement("img");
    image.className = "mist-object-img";
    image.src = `./images/${data[item].img}`;    
    return image;
}

function buildH6(data, item){
    const h6 = createDomElement("h6");
    h6.innerHTML = data[item].name;
    return h6;
}

function buildDescription(data, item){
    const description = createDomElement("p");
    description.className = "mist-object-description";
    description.innerHTML = data[item].description;
    return description;
}

function buildMistObjectText(){
    const mistObjectText = createDomElement("div");
    mistObjectText.className = "mist-object__text";
    return mistObjectText;
}

function buildMistObjectBody(){
    const mistObjectBody = createDomElement("div");
    mistObjectBody.className = "mist-object-body";
    return mistObjectBody;
}

function buildImageAndText(item){
    const imgAndText = createDomElement("div");
    imgAndText.className = buildBodyName(item);
    return imgAndText;
}

function buildBodyName(item){
    const validator = {
        item, wrapperName: "mist-object__img-and-text", limit: 2
    };
    return classNameToShowXAmountOfItemsInMobile(validator);            
}