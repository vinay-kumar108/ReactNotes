import React from 'react'

const NoteCard = ({ note }) => {
  return (
    <div className="bg-[#f3e29c] 
      border-[3px] border-blue-500 
      rounded-[25px] 
      w-full 
      min-h-[150px] sm:min-h-[170px] md:min-h-[180px]
      p-3 sm:p-4 
      shadow-md
      flex flex-col">
      <h4 className="text-center font-semibold text-gray-700 mb-2 text-sm sm:text-base">{note.title}</h4>
      <p className="text-xs sm:text-sm text-gray-700 text-center leading-4">{note.content}</p>
    </div>
  )
}

export default NoteCard