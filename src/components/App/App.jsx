import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import { searchImages } from "../../api/unsplashApi";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSearch = async (query) => {
    try {
      const data = await searchImages(query);
      setImages(data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
