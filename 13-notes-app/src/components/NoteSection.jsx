import React from 'react'
import NoteCard from './NoteCard.jsx';

const NoteSection = ({ notes }) => {
  const grouped = {};

  notes.forEach((note) => {
    if (!grouped[note.date]) {
      grouped[note.date] = [];
    }
    grouped[note.date].push(note);
  });
  return (
    <div className="space-y-6">
      {Object.keys(grouped).map((date) => (
        <div key={date}>
          <h3 className='text-blue-700 font-bold mb-2 text-sm sm:text-base'>day: {date}</h3>

          <div className="grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-5 
            gap-4 sm:gap-6">
            {grouped[date].map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default NoteSection