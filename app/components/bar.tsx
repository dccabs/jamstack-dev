import { useRef, useState, useEffect } from "react";
import { useIsVisible } from "react-is-visible";
import classNames from "classnames";
import Project from "@/app/components/project";
import { ProjectType } from "@/data/projects";

interface BarProps {
  className?: string;
  project: ProjectType;
}

const Bar = (props: BarProps) => {
  console.log("Bar props", props);
  const [isInitialized, setIsInitialized] = useState(false);
  const [active, setIsActive] = useState(false);
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);
  const { project, className } = props;
  console.log("className", className);
  const { shortClientName } = project;
  const barClasses = classNames({
    "w-11/12": active,
    "w-6/12": !active,
    "bg-orange-600": className === "bg-orange-600",
    "bg-indigo-700": className === "bg-indigo-700",
  });

  const contentClasses = classNames({
    "max-h-[2000px] hover:duration-500": active,
    "max-h-0": !active,
  });

  useEffect(() => {
    if (isVisible) {
      setIsInitialized(true);
    }
  }, [isVisible]);

  return (
    <div
      // @ts-ignore
      ref={nodeRef}
      className="pr-8"
    >
      <button
        className={`relative px-6 py-2 text-white text-2xl md:text-xl text-right font-normal transition-all duration-1000 ease-in-out font-semibold rounded-r-md mb-2 bg-gradient-to-r hover:scale-x-105 hover:duration-500 cursor-pointer ${
          isInitialized ? "-left-0" : "-left-[1000px]"
        } ${className} ${barClasses}`}
        onClick={() => {
          setIsActive(!active);
        }}
        // onBlur={() => {
        //   setIsActive(false);
        // }}
      >
        <div>{shortClientName}</div>
      </button>
      <div
        className={`w-full overflow-hidden transition-all duration-500 ${contentClasses}`}
      >
        <div className="px-4">
          <div className="py-4">
            <Project project={project} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
