export async function fetchOnePieceData() {
    try {
        const onePieceApi = "https://static.akurey.com/trainings/OnePieceInformation.json";
        const response = await fetch(onePieceApi);
        if(!response.ok){
            throw new Error("Failed to fetch One Piece data");
        }

        const data = await response.json();
        return data;
    }
    catch(exception){
        console.log(`error: ${exception}`);        
    }
}



