    
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

window.onload = async function consumeRealData() {
    try {
        const onePieceApi = "https://static.akurey.com/trainings/OnePieceInformation.json";
        const response = await fetch(onePieceApi);
        if(!response.ok){
            throw new Error("Failed to fetch One Piece data");
        }

        const data = await response.json();
        generateCharactersInDom(data);
        generateIslandsInDom(data);
        generateMistObjectsInDom(data);
    }
    catch(exception) {
        console.log(`error: ${exception}`);
    }
}

function generateCharactersInDom(data){
    const characters = data.characters;
    const sortedCharacters = sortAlfabeticallyByName(characters);
    appendCharactersData(sortedCharacters);
}

function generateIslandsInDom(data){
    const islands = data.islands;
    const sortedIslands = sortAlfabeticallyByName(islands);
    appendIslandsData(sortedIslands);
}

function generateMistObjectsInDom(data){
    const mistObjects = data.mysticObjects;
    const sortedMistObjects = sortAlfabeticallyByName(mistObjects);
    appendMistObjectData(sortedMistObjects);
}


function appendCharactersData(data) {
    const LIMIT_TO_LOAD_IN_DOM = 4;
    for(let position = 0; position < LIMIT_TO_LOAD_IN_DOM; position++){
        buildCharactersDOM(data, position);
    }
}

function buildCharactersDOM(data, position) {
    const charactersBody = document.getElementsByClassName("characters-body")[0];

    const imgAndText = createDomElement("div");

    const validator = {
        position, wrapperName: "characters__img-and-text", limit: 1
    };

    imgAndText.className = classNameToShowXAmountOfItemsInMobile(validator);

    const image = createDomElement("img");
    image.className = "characters__img";
    image.src = `./images/${data[position].img}`;
    imgAndText.appendChild(image);

    const h6 = createDomElement("h6");
    h6.innerHTML = data[position].name;
    const characters_text = createDomElement("div");
    characters_text.className = "characters__text";
    characters_text.appendChild(h6);
    imgAndText.appendChild(characters_text);

    charactersBody.appendChild(imgAndText);
}

function appendIslandsData(data){
    const LIMIT_TO_LOAD_IN_DOM = 3;
    for(let position = 0; position < LIMIT_TO_LOAD_IN_DOM; position++){
        buildIslandsDOM(data, position);
    }
}

function buildIslandsDOM(data, position){
    const islandsBody = document.getElementsByClassName("islands-body")[0];

    const imgAndText = createDomElement("div");

    const validator = {
        position, wrapperName: "islands__img-and-text", limit: 1
    };

    imgAndText.className = classNameToShowXAmountOfItemsInMobile(validator);

    const image = createDomElement("img");
    image.className = "islands__img";
    image.src = `./images/${data[position].img}`;

    imgAndText.appendChild(image);


    const h6 = createDomElement("h6");
    h6.innerHTML = data[position].name;

    const locationIcon = createDomElement("i");
    locationIcon.className = "fa-solid fa-location-dot";

    const location = createDomElement("p");
    location.innerHTML = data[position].Location;

    const islandsLocationDescriptAndIcon = createDomElement("div");
    islandsLocationDescriptAndIcon.className = "islands__location-description-and-icon";
    islandsLocationDescriptAndIcon.appendChild(locationIcon);
    islandsLocationDescriptAndIcon.appendChild(location);

    const islandsLocation = createDomElement("div");
    islandsLocation.className = "islands__location";
    islandsLocation.appendChild(h6);
    islandsLocation.appendChild(islandsLocationDescriptAndIcon);

    const heartIcon = createDomElement("i");
    heartIcon.className = "fa-solid fa-heart";

    const islandsHeart = createDomElement("div");
    islandsHeart.className = "islands__heart  d-md-none";
    islandsHeart.appendChild(heartIcon);

    const islandsText = createDomElement("div");
    islandsText.className = "islands__text";
    islandsText.appendChild(islandsLocation);
    islandsText.appendChild(islandsHeart);

    imgAndText.appendChild(islandsText);
    islandsBody.appendChild(imgAndText);
}

function appendMistObjectData(data) {
    const bodies = 2;
    for(let count = 0; count < bodies; count++){
        buildMistObjectDOM(data, count)
    }
}

function buildMistObjectDOM(data, count){
    const init = 0;
    let start;
    let end;
    if(count === init){
        start = 0;
        end = 2;
        buildMistObjectDOMAuxiliar(data, start, end);
    }
    else {
        start = 2;
        end = 4;
        buildMistObjectDOMAuxiliar(data, start, end);
    }
}

function buildMistObjectDOMAuxiliar(data, start, end) {
    const mistObjectBody = createDomElement("div");
    mistObjectBody.className = "mist-object-body";
    
    for(let position = start; position < end; position++){
        const imgAndText = createDomElement("div");
        const validator = {
            position, wrapperName: "mist-object__img-and-text", limit: 2
        };
        imgAndText.className = classNameToShowXAmountOfItemsInMobile(validator);
        const image = createDomElement("img");
        image.className = "mist-object-img";
        image.src = `./images/${data[position].img}`;

        imgAndText.appendChild(image);

        const h6 = createDomElement("h6");   
        h6.innerHTML = data[position].name; 

        const p = createDomElement("p");   
        p.innerHTML = data[position].description; 

        const mistObjectText = createDomElement("div");
        mistObjectText.className = "mist-object__text";
        mistObjectText.appendChild(h6);
        mistObjectText.appendChild(p);

        imgAndText.appendChild(mistObjectText);
        mistObjectBody.appendChild(imgAndText);
    }
    const mistObjectBodies = document.getElementsByClassName("mist-object-bodies")[0];
    mistObjectBodies.appendChild(mistObjectBody);

}

function sortAlfabeticallyByName(onePieceCategoryList) {
    return onePieceCategoryList.sort((a, b) => a.name.localeCompare(b.name));
}

function createDomElement(element){
    return document.createElement(element);
}

function classNameToShowXAmountOfItemsInMobile(validator){
    const HIDE_IN_XS_AND_SM_SCREEN = "d-none d-sm-block d-sm-none d-md-block";
                                    
    if(needsToAddRuleForItemsInMobiles(validator.position, validator.limit)){
        return `${validator.wrapperName} ${HIDE_IN_XS_AND_SM_SCREEN}`;
    }
    return validator.wrapperName;
}

function needsToAddRuleForItemsInMobiles(position, limit){
    return position > limit;
}
