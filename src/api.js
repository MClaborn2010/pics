import axios from 'axios';

const searchImages = async (term) => {
    term = 'cars'
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 9lwfyCpb87h90YzEkfFIBOS2uylYWxzt3kTE5T2smuA'
        },
        params: {
            query: term
        },
    });
    console.log(response.data.results)
    return response;
}

export default searchImages