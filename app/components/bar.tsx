import { useRef, useState, useEffect } from "react";
import { useIsVisible } from "react-is-visible";
import Image from "next/image";

interface BarProps {
  className?: string;
  title: string;
}

const Bar = (props: BarProps) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);
  const { title, className } = props;
  useEffect(() => {
    if (isVisible) {
      setIsInitialized(true);
    }
  }, [isVisible]);

  return (
    <div
      // @ts-ignore
      ref={nodeRef}
    >
      <div
        className={`relative p-6 text-white text-3xl text-right font-normal transition-all duration-1000 ease-in-out font-semibold w-11/12 rounded-r-md mb-2 bg-gradient-to-r hover:scale-x-105 hover:duration-200 cursor-pointer ${
          isInitialized ? "-left-0" : "-left-[1000px]"
        } ${className}`}
      >
        <div>{title}</div>
      </div>
    </div>
  );
};

export default Bar;
