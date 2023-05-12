import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 9lwfyCpb87h90YzEkfFIBOS2uylYWxzt3kTE5T2smuA",
    },
    params: {
      query: term,
    },
  });
  
  return response.data.results;
};

export default searchImages;
