import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import './Components/MediaContainer'
import MediaContainer from "./Components/MediaContainer";

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=' + API_KEY

function App() {
  const [media, setMedia] = useState([])

  useEffect( () => {
      axios.get(`${API_URL}`)
          .then((res) => {
              setMedia(res.data)
          })
          .catch((error) => {
              console.log(error)
          })
  })

  return (
    <div className="App">
      <MediaContainer
          title={media.title}
          url={media.url}
          media_type={media.media_type}
          explanation={media.explanation}
          date={media.date}
      />
    </div>
  );
}

export default App;
