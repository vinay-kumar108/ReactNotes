import { useEffect, useState } from "react";

export default function SpaceGallery() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const formattedData = Array.isArray(data) ? data : [data];
  const API_KEY = "ILJc2ZVTcIWanrBw8DbzCeNTyZYlXhizUziypJoJ";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=8`
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-10">

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        🌌 Cosmic Gallery
      </h1>

      {/* Loading */}
      {loading && (
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="animate-pulse bg-white/10 border border-white/20 rounded-2xl overflow-hidden"
      >
        <div className="h-60 bg-gray-700/40"></div>

        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-600/40 rounded w-3/4"></div>
          <div className="h-3 bg-gray-600/30 rounded w-1/2"></div>
          <div className="h-3 bg-gray-600/20 rounded w-full"></div>
          <div className="h-3 bg-gray-600/20 rounded w-5/6"></div>
        </div>
      </div>
    ))}
  </div>
)}

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {formattedData.map((item, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition duration-300"
          >
            {/* Media */}
            <div className="h-60 overflow-hidden">
              {item.media_type === "image" ? (
                <img
                  src={item.hdurl || item.url}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              ) : (
                <iframe
                  src={item.url}
                  title="space-video"
                  className="w-full h-full"
                />
              )}
            </div>

            {/* Content */}
            <div className="p-4">
  <h2 className="text-lg font-semibold mb-1 line-clamp-2">
    {item.title}
  </h2>

  <p className="text-sm text-gray-300 mb-2">{item.date}</p>

  <p className="text-sm text-gray-200 max-h-32 overflow-y-auto pr-2">
    {item.explanation}
  </p>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}