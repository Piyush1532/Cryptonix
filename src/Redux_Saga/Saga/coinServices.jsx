import axios from "axios";

const apiKey=import.meta.env.VITE_API_KEY
// console.log("apikey",apiKey)

export const fetchallCryptoServices=async()=>{
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 12            
          },
          headers: {
            accept: 'application/json', 
            'x-cg-demo-api-key': apiKey 
          },
        });
        // console.log(response.data)
        return response.data; 
      } catch (error) {
        console.error('Error fetching all coins:', error);
        throw error; 
      }
}


export const fetchCryptoCoinDataServices  = async (coinId) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': apiKey
        },
      });
console.log(response.data)
      return response.data; 
    } catch (error) {
      console.error(`Error fetching data for coin ${coinId}:`, error);
      throw error;
    }
  };




  export const fetchcryptocoinRecordsServices=async(coinId,historicRecord)=>{
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`, {
        params: {
          vs_currency: 'usd',
          days: historicRecord, 
        },
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': apiKey,
        },
      });
      console.log(response.data)
      // console.log("API Response Object:", response);  // Log the entire response object
      return response.data
    } catch (error) {
      console.error(`Error fetching historical records for ${coinId}:`, error);
      throw error;
    }
  }