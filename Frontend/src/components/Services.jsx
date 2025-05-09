import { CheckCircle2 } from "lucide-react";
import { serviceOptions } from "../constants";

const Services = () => {
  return (
    <div id="services" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Our Services
      </h2>
      <div className="flex flex-wrap">
        {serviceOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-5xl mb-8">
                {option.title}
              </p>
              <p className="mb-8">
                <span className="text-2xl mt-6 mr-2">{option.desc}</span>
                <span className="text-neutral-400 tracking-tight"></span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={option.link} // Use the link property here
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Explore
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
