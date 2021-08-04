import React , {useState , useEffect} from 'react'  // install ES7 to use snippets ...for ex = recp

 import axios from '../axios';
 import './Rows.css';
 import Youtube from 'react-youtube';



 const base_url = "https://image.tmdb.org/t/p/original/";
function Rows({title , fetchUrl , isLargeRow} ){
      const[movies , setMovies] = useState([]);
      const[trailerUrl , setTrailerUrl] = useState("");


      async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        console.table(request.data.results);
        return request;
      }
      useEffect(() => {
      
        
       fetchData();

      }, [fetchUrl]); // if [] , run once when the row loads and dont run again

      const opts = {
        height : "390",
        width : "100%",
        playerVars:{
         autoplay : 2,
        },
      };
      const handleClick = async (movie) => {
        if (trailerUrl) {
          setTrailerUrl('');
        } else {
          let trailerurl = await axios.get(
            `/movie/${movie.id}/videos?api_key=78e34bf3fa17fdace9359b58c2305b29`
          );
          setTrailerUrl(trailerurl.data.results[0]?.key);
        }
      };

      
    return(
    <div className = "row">
    <h2 >{title}</h2>
    
    <div className = "row_posters">  
     {}
    {movies.map(movie =>(
      
      <img key = {movie.id}
        onClick = {() => handleClick(movie) }
      className = {`row_poster ${isLargeRow && "row_posterLarge"}`} src = {`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt = {movie.name}/>  // use `` instead of ''
    ))}
    </div>
    {trailerUrl && <Youtube videoId={trailerUrl} opts = {opts} />}
    </div>
    
    )
}

export default Rows
