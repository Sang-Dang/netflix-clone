import React, { useEffect, useState } from "react";
import FilmList from '../components/FilmList/FilmList'
import LoadingSpinner from "../components/common/LoadingSpinner/LoadingSpinner";
import { fetchAll } from "../database/DatabaseHelper";

const FilmContainer: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const movieData:any = await fetchAll();
        setMovies(movieData)
      } catch(error:any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [])

  if(isLoading) {
    return <LoadingSpinner/>
  }

  if(error) {
    return <div>Error: {error}</div>
  } else {
    return <FilmList movieDatabase={movies}/>
  }
}

export default FilmContainer;
