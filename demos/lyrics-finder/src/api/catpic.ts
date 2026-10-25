const fetchCatPic = async () => {
  try {
    const response = await fetch(`https://cataas.com/cat`);
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  } catch (err) {
    console.log(err);
  }
};

export default fetchCatPic;
