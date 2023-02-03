import { useRef, useState, useEffect } from "react";
import { useIsVisible } from "react-is-visible";

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
        className={`relative p-6 text-white text-3xl text-right transition-all duration-1000 ease-in-out font-semibold w-6/12 rounded-r-md mb-2 bg-gradient-to-r ${
          isInitialized ? "-left-0" : "-left-[1000px]"
        } ${className}`}
      >
        {title}
      </div>
    </div>
  );
};

export default Bar;
