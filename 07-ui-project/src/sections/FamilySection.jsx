import React from 'react'
import FamilyCard from '../components/FamilyCard.jsx'
import familyMembers from '../data/familyData.js'
const FamilySection = () => {
  return (
    <div className="flex gap-16 items-center p-20">

{/* left side */}

<div className="max-w-md">

<h1 className="text-5xl font-bold mb-6">
Our Family Members
</h1>

<p className="text-gray-600">
Meet the amazing people who make up our family.
Each one has a unique role and personality.
</p>

</div>

{/* right side */}

<div className="flex gap-6">

{familyMembers.map((member)=>(
 <FamilyCard
key={member.id}
member={member}
/>
))}

</div>

</div>

  )
}

export default FamilySection