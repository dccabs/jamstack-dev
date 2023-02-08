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
            Who We Are
          </h2>
        </div>
      </div>
      <Bar
        className="bg-orange-700 md:w-6/12"
        title="Dan Cabaniss - Principal Developer/Owner"
      />
      <Bar
        className="bg-orange-700 md:w-6/12"
        title="Brent Bagapuro - Full stack developer"
      />
      <Bar
        className="bg-purple-500 md:w-7/12"
        title="Lourdes Suello - Full stack developer"
      />
      <Bar
        className="bg-blue-600 md:w-5/12"
        title="Michael Batoon - Full Stack Developer"
      />
      <div>...and more</div>
    </div>
  );
};

export default RecentProjects;
