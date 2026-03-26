import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=8`
      );
      setImages(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <div className="min-h-screen bg-linear-to-br h-svh w-svw from-gray-900 to-gray-700 text-white p-6">
      <h1 className="text-4xl h-[10%] font-bold text-center mb-8">
        📸 Image Gallery
      </h1>

      

      {/* Grid */}
      <div style={ loading? { display: "none" } : {} } className="grid grid-cols-2 h-[70%] md:grid-cols-4 gap-6">
        {images.map((img) => (
          <a href={img.download_url} target="_blank" key={img.id}>
            <div
          key={img.id}
          className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={img.download_url}
              alt={img.author}
              className="w-full h-44 object-cover"
              />
            <p className="text-sm text-center p-3 text-gray-200">
              {img.author}
            </p>
          </div>
          </a>
        ))}
      </div>

      {loading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <span className="text-white font-bold">Loading...</span>
        </div>
      )} 
      {/* Pagination */}
      <div style={ loading? { display: "none" } : {} } className="mt-10  static flex justify-center  gap-4">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-600 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed "
          >
          Prev
        </button>

        <span className="px-4 w-fit py-2 bg-white/10 rounded-lg">
          page {page} of many
        </span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-800 cursor-pointer rounded-lg hover:bg-gray-600"
          >
          Next
        </button>
      </div>
    </div>
      
 
  );
};

export default App;

