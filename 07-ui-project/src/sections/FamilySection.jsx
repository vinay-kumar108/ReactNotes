import React from "react";
import FamilyCard from "../components/FamilyCard.jsx";
import familyMembers from "../data/familyData.js";

const FamilySection = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col lg:flex-row items-center justify-center gap-16 px-8 lg:px-20 py-20">

      {/* LEFT SIDE */}
      <div className="max-w-md text-center lg:text-left">

        <h1 className="text-4xl lg:text-5xl font-bold text-sky-400 mb-6">
          Our Family Members
        </h1>

        <p className="text-slate-300 leading-relaxed">
          Meet the amazing people who make up our family.
          Each one has a unique role and personality.
        </p>

        <div className="w-24 h-1 bg-indigo-500 mt-6 rounded-full"></div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4">

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