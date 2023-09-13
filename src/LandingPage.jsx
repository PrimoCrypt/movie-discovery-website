import NavBar from "./components/NavBar.jsx";
import { useState, useEffect } from "react";
import fetchTopRated from "./api.jsx";




function LandingPage (){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)

    console.log(movies)

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const moviesData = await fetchTopRated();
                const topTenMovies = moviesData.slice(0, 10);
                setMovies(topTenMovies);
                setLoading(false);
            }
            catch (err){
                console.error("Error fetching data:", err);
                setLoading(false);
            }
        };

        fetchData()
    }, [])

    // const constructPosterURL = (relativePath) =>{
    //     if(relativePath){
    //         const baseUrl = "https://image.tmdb.org/t/p/w500";
    //         return `${baseUrl}${relativePath}`
    //     }
    //     return "URL_TO_PLACEHOLDER_IMAGE"
    // }
    if(!movies){
        return <h1>Not Working well</h1>
    }

    return(
        <div id="container" className="flex flex-col">
            <div id="hero-section" className="w-full">
                <NavBar />
            </div>
            <h1>Hello</h1>
            <div className="text-black">
                <h1>Array part</h1>
                <ul>
                    {movies.map((movie) =>(
                        <li key={movie.id}>{movie.title}</li>
                    ))}

                </ul>
            </div>
        </div>
    )

}

export default LandingPage;