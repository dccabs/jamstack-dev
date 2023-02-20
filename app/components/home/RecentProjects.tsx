import { useIsVisible } from "react-is-visible";
import { useRef } from "react";
import Bar from "../bar";
import projects from "@/data/projects";

import classNames from "classnames";

const RecentProjects = () => {
  const nodeRef = useRef();
  const nodeRef2 = useRef();
  return (
    <div className="bg-black text-white py-24">
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
      {projects &&
        projects.map((project, index) => {
          const barClasses = classNames({
            "bg-orange-600": project.color === "bg-orange-500",
            "bg-indigo-700": project.color === "bg-indigo-400",
            "bg-cyan-500": project.color === "bg-cyan-500",
          });
          return (
            <Bar
              key={`project-${index}`}
              className={barClasses}
              project={project}
            />
          );
        })}
      {/*<Bar className="bg-lime-500" title="Sologic" />*/}
      {/*<Bar className="bg-white text-black" title="Bright Culture" />*/}
      {/*<Bar className="bg-cyan-500" title="Alpha MD" />*/}
      {/*<Bar className="bg-teal-700" title="Landvisions" />*/}
      {/*<Bar className="bg-rose-400" title="Housecall MD" />*/}
      <div>...and more</div>
    </div>
  );
};

export default RecentProjects;
