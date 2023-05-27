import React, { useEffect, useState } from "react";
import Featured from "../components/Featured/Featured";
import { fetchAll } from "../database/DatabaseHelper";
import LoadingSpinner from "../components/common/LoadingSpinner/LoadingSpinner";

const FeaturedContainer: React.FC = () => {
  const [featuredMovie, setFeaturedMovie] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies: any[] = await fetchAll();
        setFeaturedMovie(movies[Math.floor(Math.random() * movies.length)]);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <Featured movie={featuredMovie} />;
};

export default FeaturedContainer;
