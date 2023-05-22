import { useState,useEffect } from 'react';
import './MovieCard/Moviecard';
import Moviecard from "./MovieCard/Moviecard";
import axios from 'axios';
import Navbar from './Navbar/Navbar';
const App = () => {

   const [movies, setMovies] = useState([]);
   const API_URL=" https://www.omdbapi.com/?i=tt3896198&apikey=fab4a976";

   const GetMovies=async(title)=>{

    try {
        const response = await axios.get(`${API_URL}&s=${title}`);
        const data=response.data;
        
        setMovies(data.Search);

   }
     catch (error) {
        console.error(error);
    }
    
  }



   useEffect(()=>{
         GetMovies("avengers");
   },[])




  return (
    <div className="body">
      <Navbar searchMovies={GetMovies}/>
      <div className="main">{
            movies&& movies.length>0 ? (
                  movies.map((movie)=>{
                  return <Moviecard movie={movie} key={movie.imdbID}/>;
                  }
            
            )):(
                 <div className='app__movies__notfound'>
                  <h2>movies not found</h2>
                 </div>
            )
      }
        
      </div>
      
    </div>
  );
}

export default App;
