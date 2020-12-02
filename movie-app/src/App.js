import {useState, useEffect} from 'react';
import axios from 'axios';
import Item from './Item';

function App() {

  const [data, setData] = useState([]);

  const getMovie = async () => {
    const {data: {results}} = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=54a2b44dca50bd3e2f179ac52ec5aeb3&language=en-US&page=3")
    setData(results);
  }

  useEffect(() => {
    getMovie();
  }, [])
  
  return (
    <div>
      {data ? data.map(item => {
        return <Item
          title={item.original_title}
          path={item.poster_path} 
          key={item.id}
          overview={item.overview}
        />
      }):"영화 없슴"}
    </div>   
  );
}

export default App;
