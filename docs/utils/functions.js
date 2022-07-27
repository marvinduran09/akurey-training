import { READ_ALL } from "./constants.js";

export function isInReadAllMode(readMode){
    return readMode.innerText === READ_ALL;
}

export function sortAlphabeticallyByName(onePieceCategoryList) {
    return onePieceCategoryList.sort((a, b) => a.name.localeCompare(b.name));
}

export function createDomElement(element){
    return document.createElement(element);
}

export function classNameToShowXAmountOfItemsInMobile(validator){
    const HIDE_IN_XS_AND_SM_SCREEN = "d-none d-sm-block d-sm-none d-md-block";
                                    
    if(needsToAddRuleForItemsInMobiles(validator.item, validator.limit)){
        return `${validator.wrapperName} ${HIDE_IN_XS_AND_SM_SCREEN}`;
    }
    return validator.wrapperName;
}

function needsToAddRuleForItemsInMobiles(item, limit){
    return item > limit;
}
