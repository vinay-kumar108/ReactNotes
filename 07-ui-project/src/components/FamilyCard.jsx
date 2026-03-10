import React from "react";

const FamilyCard = ({ member }) => {
  return (

<div className="relative 
w-44 sm:w-52 md:w-56 lg:w-60
h-72 sm:h-80 md:h-88 lg:h-96
rounded-3xl overflow-hidden group
bg-slate-800 shadow-lg hover:shadow-sky-500/20
transition duration-500 shrink-0">

{/* image */}

<img
src={member.image}
className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
/>

{/* dark gradient overlay */}

<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

{/* number badge */}

<div className="absolute top-4 left-4 bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shadow-md">

{member.id}

</div>

{/* bottom info */}

<div className="absolute bottom-6 left-4 text-white space-y-2">

<p className="text-sm bg-sky-400 px-3 py-1 rounded-full inline-block text-slate-900 font-medium">
{member.name}
</p>

<p className="text-xs text-slate-300">
{member.relation} • {member.age}
</p>

<span className="bg-indigo-500 px-3 py-1 rounded-full text-xs font-medium inline-block">

{member.occupation}

</span>

</div>

</div>

  );
};

export default FamilyCard;