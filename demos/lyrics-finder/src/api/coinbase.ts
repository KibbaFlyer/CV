const fetchBitcoinPrice = async () => {
    try {
      const response = await fetch(
        `https://api.coindesk.com/v1/bpi/currentprice.json`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  
  export default fetchBitcoinPrice;
  