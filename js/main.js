const getMovieHtml=movie=>{
    return `<div class = "movie" onclick="getMovieDetailed(${movie.id})">
        <h3>${movie.title}</h3>
        <img src ="https://image.tmdb.org/t/p/w185/${movie.poster_path}" alt ="">
    </div>`
}



const renderMovies = movies => {
    document.querySelector('main.movies').innerHTML = ''
    for (const movie of movies) {
        document.querySelector('main.movies').innerHTML += getMovieHtml(movie)
        
        

    }
    
}



const getMovieDetailed = movie_id =>{
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`).then(res=>{
        const movie = res.data;

    })
    .catch(console.error)

}


const getLatestMovies = async() => {
    try { 
    const res = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES')
    const movies = res.data.results;
    renderMovies(movies)    
    }catch (error) {
        console.error(error);

    }
}





const getPopularMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES')
    .then (res=>res.json())
    .then(res=>{
        const movies = res.results;
        renderMovies(movies);

    })
    .catch(error=>console.error(error))
}