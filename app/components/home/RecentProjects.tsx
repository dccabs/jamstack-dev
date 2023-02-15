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
            Recent Projects
          </h2>
        </div>
      </div>
      <Bar className="bg-orange-600" title="The University of Texas" />
      <Bar className="bg-teal-300 text-black" title="Flexcar" />
      <Bar className="bg-cyan-500" title="DTCC" />
      <Bar className="bg-lime-500" title="Sologic" />
      <Bar className="bg-white text-black" title="Bright Culture" />
      <Bar className="bg-cyan-500" title="Alpha MD" />
      <Bar className="bg-teal-700" title="Landvisions" />
      <Bar className="bg-rose-400" title="Housecall MD" />
      <div>...and more</div>
    </div>
  );
};

export default RecentProjects;
