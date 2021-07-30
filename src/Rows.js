import React , {useState , useEffect} from 'react'  // install ES7 to use snippets ...for ex = recp
 import axios from './axios'
function Rows({title , fetchUrl}){
      const[movies , setMovies] = useState([]);
      async function fetchData(){
        const request = await axios.get(fetchUrl);
        console.log(request);
        return request;
      }
      useEffect(() => {
        
        
       fetchData();

      }, []);
    return(
    <div>
    <h2>{title}</h2>
    {}
    </div>
    )
}

export default Rows
