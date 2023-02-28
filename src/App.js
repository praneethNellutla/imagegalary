import React, { useState, useEffect} from "react";
import Imagecard from "./components/Imagecard";
import ImageSearch from "./components/ImageSearch";



function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [term, setterm] = useState("");

  async function getData(){
    const res = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY_PIXABAY}&q=${term}&image_type=photo`)
    const data = await res.json();
    setImages(data.hits)
    setLoading(false)
  }

  useEffect(() => {
    getData().catch(err => console.log(err));
  }, [term])

  return (
    <div className="container mx-auto">
      <ImageSearch searchText = {(text) => setterm(text)} />
      {!isLoading && images.length === 0 && <h1 className="text-4xl text-center mx-auto mt-32">No Images Found..</h1>}
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading ....</h1> :
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        {images.map(image => (
          <Imagecard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  );
}

export default App;
