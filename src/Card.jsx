
import { Bookmark } from "lucide-react";

const Card = (props) => {
  const img = props.brandLogo;
  const days = props.datePosted;
  const company = props.company;
  const post = props.post;
  const tag1 = props.tag1;
  const tag2 = props.tag2;
  const pay = props.pay;
  const location = props.location;

  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={img} />
          <button>
            Save <Bookmark size={15} />
          </button>
        </div>
        <div className="center">
          <h3>
            {company} <span> {days} </span>
          </h3>
          <h2>{post}</h2>
          <div className="tag">
            <h4>{tag1}</h4>
            <h4>{tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>${pay}</h3>
          <p>{location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
