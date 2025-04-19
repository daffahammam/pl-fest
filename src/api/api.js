import axios from "axios";

const API_URL = "https://soccer.highlightly.net/";
const API_KEY = "c151341e-a331-4e58-a5c4-8877777ab2e2";


export const getStandings = async () => {
    try {
        const response = await axios.get(`${API_URL}/standings`, {
            params: {
                leagueId: 33973,
                season: 2024
            },
            headers: {
                "x-rapidapi-key": API_KEY
            }
        })
 
 
        return response.data;
    } catch (error) {
        console.error("Error fetching standings:", error.message);
        return null;
    }
 
}

export const getMatch = async (date) => {
    try {
        const response = await axios.get(`${API_URL}/matches`, {
            params: {
                leagueId: 33973,
                date: date,
                timezone: 'Asia/Jakarta',
                limit: 10,
                offset: 0
            },
            headers: {
                "x-rapidapi-key": API_KEY
            }
        });
 
 
        return response.data;
    } catch (error) {
        console.error("Error fetching standings:", error.message);
        return null;
    }
 }
 
