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
      <Bar
        className="bg-orange-700 md:w-6/12"
        title="The University of Texas"
      />
      <Bar className="bg-purple-500 md:w-7/12" title="Flexcar" />
      <Bar className="bg-blue-600 md:w-5/12" title="DTCC" />
      <Bar className="bg-emerald-500 md:w-6/12" title="Sologic" />
      <Bar className="bg-red-500 md:w-7/12" title="Novus North" />
      <Bar className="bg-emerald-500 md:w-6/12" title="Bright Culture" />
      <Bar className="bg-cyan-500 md:w-5/12" title="Alpha MD" />
      <Bar className="bg-green-600 md:w-6/12" title="Landvisions" />
      <Bar className="bg-yellow-500 md:w-7/12" title="Housecall MD" />
      <Bar className="bg-green-500 md:w-5/12" title="Play Your Court" />
      <div>...and more</div>
    </div>
  );
};

export default RecentProjects;
