import React from 'react'

const FamilyCard = ({ member }) => {
  return(

<div className="relative w-60 h-96 rounded-3xl overflow-hidden">

<img
src={member.image}
className="w-full h-full object-cover"
/>

{/* number badge */}

<div className="absolute top-4 left-4 bg-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">

{member.id}

</div>

{/* bottom info */}

<div className="absolute bottom-6 left-4 text-white">

<p className="text-lg bg-pink-200 px-2 py-1 rounded-full inline-block text-red-900">
{member.name}
</p>

<p className="text-xs opacity-80">
{member.relation} • {member.age}
</p>

<span className="bg-blue-500 px-3 py-1 rounded-full text-xs mt-2 inline-block">

{member.occupation}

</span>

</div>

</div>
  )
}

export default FamilyCard