document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const newArtistForm = document.querySelector("#new-artist-form");
    newArtistForm.addEventListener('submit', handlenewArtistFormSubmit);

    const deleteAllButton = document.querySelector("#delete-all");
    deleteAllButton.addEventListener('click', handleDeleteAll)

}); 

const handlenewArtistFormSubmit = function(event){
    event.preventDefault()
    const artistListEntry = createArtistListEntry(event.target);
    const artistList = document.querySelector('#artist-list');
    artistList.appendChild(artistListEntry);

    event.target.reset();
}

const createArtistListEntry = function (form){
    const artistListEntry = document.createElement('li');
    artistListEntry.classList.add('artist-list-item');

    const artist = document.createElement('h3');
    artist.textContent = form.artist.value;
    
    artistListEntry.appendChild(artist);

    const country = document.createElement('h4');
    country.textContent = form.country.value;
    artistListEntry.appendChild(country);

    const genre = document.createElement('p');
    genre.textContent = form.genre.value;
    artistListEntry.appendChild(genre);


    return artistListEntry;
}

const handleDeleteAll = function (){
    const artistList = document.querySelector('#artist-list');
    artistList.innerHTML = null;
}