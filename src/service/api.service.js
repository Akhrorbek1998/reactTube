import axios from "axios";
const BASE_URI = `https://youtube-v31.p.rapidapi.com`

const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '736c2036c6mshab09cfb53ffc621p1d47c6jsn7f1051e62ce2',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options);
        return response 
    }
}
