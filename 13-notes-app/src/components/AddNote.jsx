import React, { useState } from 'react';

const AddNote = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const submitHandler = () => {
    if (!title || !content) return;
    addNote(title, content);
    setTitle("");
    setContent("");
    setIsExpanded(false);
  };

  return (
    <div className="flex justify-center my-5 sm:my-6">
      <div className="flex flex-col gap-2 bg-[#f3e29c] border-2 border-yellow-400 rounded-xl px-3 sm:px-4 py-3 w-full max-w-[400px] shadow-sm">
        
        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onClick={() => setIsExpanded(true)}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent outline-none text-blue-600 font-semibold text-sm sm:text-base"
        />

        {/* Content */}
        {isExpanded && (
          <>
            {/* Textarea */}
            <textarea
              placeholder="Write your note..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full mt-2 bg-transparent outline-none text-gray-700 text-xs sm:text-sm resize-none"
              rows={3}
            />

                </>
              )}
            {/* Button */}
            <div className="flex justify-end mt-2">
              <button
                onClick={submitHandler}
                className="bg-green-500 w-8 h-8 flex items-center justify-center rounded-full text-black font-bold shadow"
              >
                ➤
              </button>
            </div>

      </div>
    </div>
  );
};

export default AddNote;