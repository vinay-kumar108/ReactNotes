/*
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [userData, setUserData] = useState([])
  const [page, setPage] = useState(1);



  const getData = async () => {
    try {

      const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
      setUserData(res.data);
    } catch (error) {
      console.error(error);
    }
  }



  useEffect(() => {
    getData();

  }, [page])

  return (
    <div className='bg-gray-500 min-h-screen p-4 text-white'>

      <h1 className='text-3xl font-bold mb-4'>Gallery Project</h1>

      <button onClick={() => setPage((prev) => prev + 1)}>
  Click Me
</button>

<div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
  {userData.map((item) => (
    <div key={item.id} className='bg-white rounded overflow-hidden'>
      <img
        src={item.download_url}
        alt={item.author}
        className='w-full h-40 object-cover'
      />
      <p className='text-black text-sm p-2'>{item.author}</p>
    </div>
  ))}
</div>

<div className="mt-4 flex justify-center gap-4">
  <button
    onClick={() => setPage((prev) => prev - 1)}
    disabled={page === 1}
  >
    Prev
  </button>

  <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-600" onClick={() => setPage((prev) => prev + 1)}>
    Next
  </button>
</div>

    </div>
  )
}

export default App;
*/
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        📸 Image Gallery
      </h1>

      {/* Loader */}
      {loading && (
        <p className="text-center text-lg animate-pulse">Loading...</p>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img) => (
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
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center gap-4">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-600 disabled:opacity-40"
        >
          Prev
        </button>

        <span className="px-4 py-2 bg-white/10 rounded-lg">
          Page {page}
        </span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;