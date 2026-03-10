import React from "react";
import FamilyCard from "../components/FamilyCard.jsx";
import familyMembers from "../data/familyData.js";

const FamilySection = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 
flex flex-col lg:flex-row 
items-center justify-center
gap-10 md:gap-14 lg:gap-16
px-4 sm:px-6 md:px-10 lg:px-20
py-16 md:py-20 min-h-screen bg-slate-900 flex items-center justify-center px-6">
      {/* LEFT SIDE */}
<div className="max-w-md text-center lg:text-left px-4">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-400 mb-6">
    Our Family Members
  </h1>

  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
    Meet the amazing people who make up our family.
    Each one has a unique role and personality.
  </p>

  <div className="w-24 h-1 bg-indigo-500 mt-6 rounded-full mx-auto lg:mx-0"></div>
</div>

      {/* RIGHT SIDE */}
      <div className="flex gap-4 sm:gap-6 overflow-x-auto py-4 w-full lg:w-auto scrollbar-hide scroll-smooth">

        {familyMembers.map((member) => (
          <FamilyCard
            key={member.id}
            member={member}
          />
        ))}

      </div>

    </div>
  );
};

export default FamilySection;