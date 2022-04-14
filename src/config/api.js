export const movieSearch = (query) =>
    `https://api.tvmaze.com/search/shows?q=${query}`

export const singleMovie = (movieName) => 
    `https://api.tvmaze.com/singlesearch/shows?q=${movieName}`

    
export const castMembers = (movieId) =>
    `https://api.tvmaze.com/shows/${movieId}/cast`

export const displayCountryFlag = (name) =>  
    `https://countryflagsapi.com/png/${name}`


export const episodeNumber = (movieId) => 
    `https://api.tvmaze.com/shows/${movieId}/episodes`


export const movieImages = (movieId) => 
    `https://api.tvmaze.com/shows/${movieId}/images`


export const findActor =(name) => 
    `https://api.tvmaze.com/search/people?q=${name}`


export const actorDetails = (actorId) => 
    `https://api.tvmaze.com/people/${actorId}?embed=castcredits`


