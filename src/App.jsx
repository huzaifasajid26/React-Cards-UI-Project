import Card from "./Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "./../public/google.png",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "85/hr",
      location: "Mountain View, USA",
    },
    {
      brandLogo:
        "./../public/amazon.jpg",
      company: "Amazon",
      datePosted: "10 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "120/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "./../public/meta.png",
      company: "Meta",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "110/hr",
      location: "London, UK",
    },
    {
      brandLogo:
        "./../public/apple.png",
      company: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "90/hr",
      location: "Cupertino, USA",
    },
    {
      brandLogo:
        "./../public/netflex.png",
      company: "Netflix",
      datePosted: "4 weeks ago",
      post: "Product Designer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "140/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "./../public/microsoft.png",
      company: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "100/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "./../public/open AI.png",
      company: "OpenAI",
      datePosted: "1 week ago",
      post: "AI Research Assistant",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "130/hr",
      location: "San Francisco, USA",
    },
    {
      brandLogo:
        "./../public/tesla.png",
      company: "Tesla",
      datePosted: "3 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "115/hr",
      location: "Austin, USA",
    },
    {
      brandLogo:
        "./../public/ibm.png",
      company: "IBM",
      datePosted: "8 days ago",
      post: "Data Analyst",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "75/hr",
      location: "Toronto, Canada",
    },
    {
      brandLogo:
        "./../public/samsung.png",
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
      {jobOpenings.map(function (elem) {
        return (
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
        );
      })}
    </div>
  );
};

// 1:59:00

export default App;
