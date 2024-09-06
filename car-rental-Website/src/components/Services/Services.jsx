import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import "./servicesCss.css";

const skillsData = [
  {
    id:1,
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    id:2,
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    id:3,
    name: "Experience",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];
export const Services = ({theme}) => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1
            className="text-3xl text-primary font-semibold font-serif text-center sm:text-4xl"
          >
            Why Choose Us{" "}
          </h1>
        </div>
        <div className="grid grid-col sm:grid-cols-2 md:grid-cols-3 gap-3">
          {skillsData.map((service) => (
            
            <div
            data-aos="fade-up"
                data-aos-delay={service.aosDelay}
              className="card text-center group space-y-3 sm:space-y-6 p-4 pt-0 sm:pb-14 bg-dark  hover:bg-lightPrimary duration-300 text-white hover:text-black rounded-lg duration-500"
              key={service.id}
            >
              <div className="tools">
                <div className="circle"><span className="red apple-box"></span></div>
                <div className="circle"><span className="yellow apple-box"></span></div>
                <div className="circle"><span className="green apple-box"></span></div>
              </div>
             <div className="content">
             <div className="text-lightPrimary place-items-center grid">
                {service.icon}
              </div>
              <h1 className="text-2xl font-semibold">{service.name}</h1>
              <p>{service.description}</p>
              <div className="button-learn mt-6 flex justify-center items-center">
                <div className="Custombox">L</div>
                <div className="Custombox">E</div>
                <div className="Custombox">A</div>
                <div className="Custombox">R</div>
                <div className="Custombox">N</div>
              </div>
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
