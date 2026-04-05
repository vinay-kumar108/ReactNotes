import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function APOTD() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const formattedData = Array.isArray(data) ? data : [data];

  const API_KEY = "ILJc2ZVTcIWanrBw8DbzCeNTyZYlXhizUziypJoJ";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.nasa.gov/planetary/apod`,
          {
            params: {
              api_key: "ILJc2ZVTcIWanrBw8DbzCeNTyZYlXhizUziypJoJ",
              count: 8,
            },
          }
        );

        setData(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 return (
  <div className="min-h-screen bg-gray-950 text-white px-4 md:px-8 py-10">
    
    {/* Heading */}
    <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 
      bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 
      bg-clip-text text-transparent">
      🌌 Cosmic Gallery
    </h1>

    {/* Loader */}
    {loading ? (
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="h-56 bg-gray-800"></div>

            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-700 rounded w-1/2"></div>
              <div className="h-3 bg-gray-700 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      /* Content */
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {formattedData.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/apotd/${item.date}`)}
            className="group cursor-pointer bg-white/5 border border-white/10 
              rounded-2xl overflow-hidden shadow-md 
              hover:shadow-xl hover:shadow-yellow-500/10 
              transition-all duration-300 hover:-translate-y-1"
          >
            
            {/* Image / Video */}
            <div className="h-56 overflow-hidden">
              {item.media_type === "image" ? (
                <img
                  src={item.hdurl || item.url}
                  alt={item.title}
                  className="w-full h-full object-cover 
                    group-hover:scale-110 transition duration-500"
                />
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center text-sm text-gray-400">
                  Video Preview
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-yellow-400 transition">
                {item.title}
              </h2>

              <p className="text-xs text-gray-400 mb-3">{item.date}</p>

              <p className="text-sm text-gray-300 line-clamp-4 leading-relaxed">
                {item.explanation}
              </p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
}