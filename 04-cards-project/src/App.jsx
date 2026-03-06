import Card from "./components/Card";

const cards = [
{
  company: "Amazon",
  postTime: 5,
  jobPosition: "Senior UI/UX Designer",
  jobType: "Part-Time",
  jobDesc: "Senior Level",
  payScale: "$120/hr",
  jobLocation: "Mumbai, India"
},
{
  company: "Google",
  postTime: 30,
  jobPosition: "Graphic Designer",
  jobType: "Part-Time",
  jobDesc: "Flexible Schedule",
  payScale: "$150-220k",
  jobLocation: "Kochi, India"
},
{
  company: "Dribble",
  postTime: 18,
  jobPosition: "Senior Motion Designer",
  jobType: "Contract",
  jobDesc: "Remote",
  payScale: "$85/hr",
  jobLocation: "Chennai, India"
},
{
  company: "Figma",
  postTime: 5,
  jobPosition: "UX Designer",
  jobType: "Full-Time",
  jobDesc: "In office",
  payScale: "$200-250k",
  jobLocation: "Bangalore, India"
},
{
  company: "Airbnb",
  postTime: 5,
  jobPosition: "Senior UI/UX Designer",
  jobType: "Contract",
  jobDesc: "Remote",
  payScale: "$100/hr",
  jobLocation: "Delhi, India"
},
{
  company: "Apple",
  postTime: 5,
  jobPosition: "Graphic Designer",
  jobType: "Full-Time",
  jobDesc: "Flexible Schedule",
  payScale: "$85-120k",
  jobLocation: "Kerala, India"
}
];

const App = () => {
  return (

    <div className="min-h-screen bg-gray-100 p-10">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Job Opportunities
      </h1>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {cards.map((ele, idx) => (
          <Card
            key={idx}
            company={ele.company}
            datePosted={ele.postTime}
            jobPosition={ele.jobPosition}
            jobType={ele.jobType}
            jobDesc={ele.jobDesc}
            payScale={ele.payScale}
            jobLocation={ele.jobLocation}
          />
        ))}

      </div>

    </div>

  )
}

export default App