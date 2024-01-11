document.addEventListener("DOMContentLoaded", ()=> {
    const mainText = document.getElementById("mainText")

    //Charge le texte sauvegardé
    chrome.storage.local.get(['savedText'], function(result) {
        mainText.value = result.savedText || ""
    })

    // Ecoute pour sauvegarder le texte
    mainText.addEventListener("input", () => {
        chrome.storage.local.set({"savedText": mainText.value})
    })
})