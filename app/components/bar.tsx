import { useRef, useState, useEffect } from "react";
import { useIsVisible } from "react-is-visible";
import classNames from "classnames";
import Image from "next/image";
import ut_logo from "../../ut_logo.png";

interface BarProps {
  className?: string;
  title: string;
}

const Bar = (props: BarProps) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [active, setIsActive] = useState(false);
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);
  const { title, className } = props;

  // @ts-ignore
  const barClasses = classNames({
    "w-11/12 md:w-11/12": active,
  });

  const contentClasses = classNames({
    "h-[300px] hover:duration-500": active,
    "h-0": !active,
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
        className={`relative p-6 text-white text-2xl md:text-2xl text-right font-normal transition-all duration-1000 ease-in-out font-semibold w-11/12 rounded-r-md mb-2 bg-gradient-to-r hover:scale-x-105 hover:duration-500 cursor-pointer ${
          isInitialized ? "-left-0" : "-left-[1000px]"
        } ${className} ${barClasses}`}
        onClick={() => {
          setIsActive(true);
        }}
        onBlur={() => {
          setIsActive(false);
        }}
      >
        <div>{title}</div>
      </button>
      <div
        className={`w-full overflow-hidden transition-all duration-500 ${contentClasses}`}
      >
        <div className="px-4">
          {/*<Image src={ut_logo} alt={"University of Texas Logo"} />*/}
          <div className="py-4">
            <h3 className="text-3xl font-normal">
              The University of Texas at Austin
            </h3>
            <div>Dell Medical School</div>
            <div className="[&>p]:py-4">
              <p>
                Researchers at Dell Medical School were interested in creating a
                modern, user-friendly survey tool to help increase participation
                in their research. The team was looking for a solution that
                would allow them to create surveys, collect data, and analyze
                results in a single platform.
              </p>
              <p className="italic">Read more about the project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
