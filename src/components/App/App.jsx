import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import Loader from "../Loader/Loader.jsx";
import { searchImages } from "../../api/unsplashApi";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const data = await searchImages(query);
      setImages(data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      {loading && <Loader />}
    </div>
  );
};

export default App;
