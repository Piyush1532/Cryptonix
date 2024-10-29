import axios from "axios";

// const  apiKey="CG-UTCbe8ByT4SpWyx7KEz2p6nj"
export const fetchallCryptoServices=async()=>{
  const apiKey=import.meta.env.VITE_API_KEY

    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10            
          },
          headers: {
            accept: 'application/json', 
            'x-cg-demo-api-key': apiKey 
          },
        });
        console.log(response.data)
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
// console.log(response.data)
      return response.data; 
    } catch (error) {
      console.error(`Error fetching data for coin ${coinId}:`, error);
      throw error;
    }
  };