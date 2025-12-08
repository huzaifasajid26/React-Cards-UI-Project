import Card from "./Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "/google.png",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "85/hr",
      location: "Mountain View, USA",
    },
    {
      brandLogo: "/amazon.jpg",
      company: "Amazon",
      datePosted: "10 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "120/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo: "/meta.png",
      company: "Meta",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "110/hr",
      location: "London, UK",
    },
    {
      brandLogo: "/apple.png",
      company: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "90/hr",
      location: "Cupertino, USA",
    },
    {
      brandLogo: "/netflex.png",
      company: "Netflix",
      datePosted: "4 weeks ago",
      post: "Product Designer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "140/hr",
      location: "Remote",
    },
    {
      brandLogo: "/microsoft.png",
      company: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "100/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "/open AI.png",
      company: "OpenAI",
      datePosted: "1 week ago",
      post: "AI Research Assistant",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "130/hr",
      location: "San Francisco, USA",
    },
    {
      brandLogo: "/tesla.png",
      company: "Tesla",
      datePosted: "3 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "115/hr",
      location: "Austin, USA",
    },
    {
      brandLogo: "/ibm.png",
      company: "IBM",
      datePosted: "8 days ago",
      post: "Data Analyst",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "75/hr",
      location: "Toronto, Canada",
    },
    {
      brandLogo: "/samsung.png",
      company: "Samsung",
      datePosted: "2 days ago",
      post: "Full Stack Developer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "125/hr",
      location: "Seoul, South Korea",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              brandLogo={elem.brandLogo}
              company={elem.company}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
