const artists = [
    "davido",
    "wiskid",
    "young thug",
    "shallipopi",
    "adele",
    "simi",
    "jovis",
]

const artistlist = document.getElementById("artistlists")

displayArtists(artists)

function sortArtists() {
    const sortedArtists = artists.sort();
    displayArtists(sortedArtists);
    console.log(sortedArtists);
    
}

function displayArtists(artists) {
    artistlist.innerHTML = "";
    for (let index = 0; index < artists.length; index++) {
        artistlist.innerHTML += `<li class="list-group-item">${artists[index]}</li>`

    }
}

function searchArtists(e) {
    const userInput = e.value.toLowerCase();
    const result = artists.filter(function (artist) {
        const converted = artist.toLowerCase();
        return converted.includes(userInput);
        
    });
    console.log(result);
    displayArtists(result);
    
}