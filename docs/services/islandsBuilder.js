import { createDomElement, classNameToShowXAmountOfItemsInMobile } from "../utils/functions.js"

export function generateIslandsInDom(islandsData){
    const LIMIT_TO_LOAD = 3;
    for(let item = 0; item < LIMIT_TO_LOAD; item++){
        appendIslandsData(islandsData, item);
    }
}

function appendIslandsData(data, item){
    const body = buildBody(data, item);
    const islandsBody = document.getElementsByClassName("islands-body")[0];
    islandsBody.appendChild(body);
}

function buildBody(data, item){
    const imgAndText = buildImageAndText(item);
    
    const image = buildImage(data, item);
    imgAndText.appendChild(image);

    const h6 = buildH6(data, item);

    const locationIcon = buildLocationIcon();
    const location = buildLocation(data, item);
    const islandsLocationDescriptAndIcon = buildIslandsLocationDescriptAndIcon();
    islandsLocationDescriptAndIcon.appendChild(locationIcon);
    islandsLocationDescriptAndIcon.appendChild(location);

    const islandsLocation = buildIslandsLocation();
    islandsLocation.appendChild(h6);
    islandsLocation.appendChild(islandsLocationDescriptAndIcon);

    const heartIcon = buildHeartIcon();
    const islandsHeart = buildIslandsHeart();
    islandsHeart.appendChild(heartIcon);

    const islandsText = buildIslandsText();
    islandsText.appendChild(islandsLocation);
    islandsText.appendChild(islandsHeart);

    imgAndText.appendChild(islandsText);
    return imgAndText;
}

function buildImage(data, item){
    const image = createDomElement("img");
    image.className = "islands__img";
    image.src = `./images/${data[item].img}`;
    return image;  
}


function buildH6(data, item){
    const h6 = createDomElement("h6");
    h6.innerHTML = data[item].name;
    return h6;
}

function buildLocationIcon(){
    const locationIcon = createDomElement("i");
    locationIcon.className = "fa-solid fa-location-dot";
    return locationIcon;
}

function buildLocation(data, item){
    const location = createDomElement("p");
    location.innerHTML = data[item].Location;
    return location;
}

function buildIslandsLocationDescriptAndIcon(){
    const islandsLocationDescriptAndIcon = createDomElement("div");
    islandsLocationDescriptAndIcon.className = "islands__location-description-and-icon";
    return islandsLocationDescriptAndIcon;
}

function buildIslandsLocation(){
    const islandsLocation = createDomElement("div");
    islandsLocation.className = "islands__location";
    return islandsLocation;
} 

function buildHeartIcon(){
    const heartIcon = createDomElement("i");
    heartIcon.className = "fa-solid fa-heart";
    return heartIcon;
}

function buildIslandsHeart(){
    const islandsHeart = createDomElement("div");
    islandsHeart.className = "islands__heart  d-md-none";
    return islandsHeart;
}

function buildIslandsText(){
    const islandsText = createDomElement("div");
    islandsText.className = "islands__text";
    return islandsText;
}

function buildImageAndText(item){
    const imgAndText = createDomElement("div");
    imgAndText.className = buildBodyName(item);
    return imgAndText;
}

function buildBodyName(item){
    const validator = {
        item, wrapperName: "islands__img-and-text", limit: 1
    };
    return classNameToShowXAmountOfItemsInMobile(validator);            
}