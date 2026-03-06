import { useState } from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {

  const [saved, setSaved] = useState(false)

  const toggleBookmark = () => {
    setSaved(!saved)
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-5 max-w-sm hover:shadow-xl transition">

      {/* Top */}
      <div className="flex justify-between items-center mb-4">

        <div className="w-12 h-12">
          <img
            className="w-full h-full object-contain"
            src={`../src/assets/${props.company}.png`}
            alt="company logo"
          />
        </div>

        <div
          onClick={toggleBookmark}
          className="flex items-center gap-2 cursor-pointer text-sm"
        >
          <span>{saved ? "Saved" : "Save"}</span>

          <Bookmark
            size={18}
            fill={saved ? "black" : "none"}
          />

        </div>
      </div>

      {/* Center */}
      <div className="space-y-3">

        <div className="flex justify-between text-sm text-gray-500">
          <span className="font-medium text-gray-700">
            {props.company}
          </span>

          <span>{props.datePosted} days ago</span>
        </div>

        <h2 className="text-lg font-semibold">
          {props.jobPosition}
        </h2>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-gray-200 px-2 py-1 rounded">
            {props.jobType}
          </span>
        </div>

        <p className="text-sm text-gray-600">
          {props.jobDesc}
        </p>

      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center mt-6">

        <div>
          <div className="font-semibold text-gray-800">
            {props.payScale}
          </div>

          <div className="text-sm text-gray-500">
            {props.jobLocation}
          </div>
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          Apply now
        </button>

      </div>

    </div>
  )
}

export default Card