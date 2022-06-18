import "./projects.css";
import myProjectsList from "../data";
import Product from "../../product/Product";

export const Projects = () => {
  console.warn(myProjectsList);
  return (
    <div className="pl">
     <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
        These are some of my projects.The first three projects are android apps built using java and fourth project is a website bult using Bootstrap,Html and CSS.
        </p>
      </div>
      <div className="pl-list">
        {myProjectsList.map((item) => (
          <Product key={item.id} img={item.img} link={item.links} />
        ))}
      </div>
    </div>
  );
};
