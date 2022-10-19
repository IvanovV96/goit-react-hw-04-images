import axios from 'axios';

const REACT_APP_API_KEY = '30692116-8c99e11975297b99dce2811ab';
axios.defaults.baseURL = 'https://pixabay.com/api/';

async function fetchImg(inputValue) {
  const data = await axios.get(
    `?q=${inputValue}&key=${REACT_APP_API_KEY}&page=1&per_page=12&image_type=photo&orientation=horizontal`
  );
  return data.data.hits;
}

export default fetchImg;
