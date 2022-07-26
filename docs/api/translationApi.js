
export async function translate(text, sourceLanguage, targetLanguage){
    const translateApi = "https://libretranslate.de/translate";
    const response = await fetch(translateApi, {
        method: "POST",
        body: JSON.stringify({
            q: text,
            source: sourceLanguage,
            target: targetLanguage
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    return data;
}
