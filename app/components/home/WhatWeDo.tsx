import { useIsVisible } from "react-is-visible";
import { useRef } from "react";
import Bar from "../bar";

const RecentProjects = () => {
  const nodeRef = useRef();
  const nodeRef2 = useRef();
  const isVisible = useIsVisible(nodeRef);
  const isVisible2 = useIsVisible(nodeRef2);
  return (
    <div className="bg-black text-white py-10">
      <div className="">
        <div
          // @ts-ignore
          ref={nodeRef}
        >
          <h2
            className={`text-3xl lg:text-6xl font-semibold relative transition-all duration-500 ease-in-out pb-10 px-4`}
          >
            What We Do
          </h2>
        </div>
      </div>
      <Bar className="bg-orange-700 md:w-6/12" title="Website Development" />
      <Bar className="bg-orange-700 md:w-6/12" title="Mobile App Development" />
      <Bar className="bg-purple-500 md:w-7/12" title="Front End Development" />
      <Bar className="bg-blue-600 md:w-5/12" title="Back End Development" />
      <Bar className="bg-blue-600 md:w-5/12" title="API Integrations" />
      <Bar className="bg-emerald-500 md:w-6/12" title="SMS Automation" />
      <Bar className="bg-red-500 md:w-7/12" title="Custom Payment Solutions" />
      <Bar className="bg-emerald-500 md:w-6/12" title="Machine Learning" />
      <div>...and more</div>
    </div>
  );
};

export default RecentProjects;
