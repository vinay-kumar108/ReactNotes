import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Details = () => {
    const { date } = useParams();
    const [data, setData] = useState(null);
    const API_KEY = "ILJc2ZVTcIWanrBw8DbzCeNTyZYlXhizUziypJoJ";

    useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
      );
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [date]);

  if (!data) return <p className="text-white">Loading...</p>;

    return (
        <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      {data.media_type === "image" ? (
        <img
          src={data.hdurl || data.url}
          alt={data.title}
          className="w-full max-h-[70vh] object-contain mb-4"
        />
      ) : (
        <iframe src={data.url} className="w-full h-[70vh]" />
      )}

      <p className="text-gray-300">{data.explanation}</p>
    </div>
    )
}

export default Details