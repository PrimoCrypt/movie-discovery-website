import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "79d82c911f6278fc6fb157cc6adbc41d"
const PAGE_SIZE = 1
console.log(API_KEY)
const fetchTopRated = async () =>{
    try{
        const response = await axios.get(`${BASE_URL}/movie/top_rated`,{
            params: {
                api_key: API_KEY,
                page : PAGE_SIZE
            },
        });
        const results = response.data.results;
        console.log("Fetched Top-Rated Movies:", results);
        return results
    }
    catch (error){
        console.error("An error occured:", error);
    }
};

export default fetchTopRated