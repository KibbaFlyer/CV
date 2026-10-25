const fetchBored = async () => {
    try {
      const response = await fetch(
        `https://www.boredapi.com/api/activity`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  
  export default fetchBored;
  