import  { fetchOnePieceData } from "../api/onePieceApi.js";
import { sortAlphabeticallyByName } from "../utils/functions.js";
import { generateCharactersInDom } from "./charactersBuilder.js";
import { generateIslandsInDom } from "./islandsBuilder.js";
import { generateMistObjectsInDom } from "./mistObjectBuilder.js";

export async function placeFetchedOnePieceDataInDom(){
    const onePieceData = await fetchOnePieceData();
    handleOnePieceCategoriesCreationInDom(onePieceData);
}

function handleOnePieceCategoriesCreationInDom(onePieceData){
    const alphabeticallySortedCharacters = sortAlphabeticallyByName(onePieceData.characters);
    const alphabeticallySortedIslands = sortAlphabeticallyByName(onePieceData.islands);
    const alphabeticallySortedMistObjects = sortAlphabeticallyByName(onePieceData.mysticObjects);
    buildCharacters(alphabeticallySortedCharacters);
    buildIslands(alphabeticallySortedIslands);
    buildMistObjects(alphabeticallySortedMistObjects);
}

function buildCharacters(characters){
    generateCharactersInDom(characters);            
}

function buildIslands(islands) {
    generateIslandsInDom(islands);
}

function buildMistObjects(mistObjects){
    generateMistObjectsInDom(mistObjects);
}