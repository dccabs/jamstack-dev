"use client";
import { useRef } from "react";
import Bar from "../bar";

interface RecentProjectsProps {
  data: any;
}

const RecentProjects = (props: RecentProjectsProps) => {
  const data = props.data;
  const nodeRef = useRef();
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
      {data &&
        data.map((project: any, index: number) => {
          return (
            <Bar
              key={`project-${index}`}
              className={project.color}
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
