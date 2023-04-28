import React from "react";

type Viewport = "sm" | "md" | "lg" | "xl" | "2xl";

const useViewport = () => {
  const [viewport, setViewport] = React.useState<Viewport>("sm");

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setViewport("sm");
      } else if (window.innerWidth < 768) {
        setViewport("md");
      } else if (window.innerWidth < 1024) {
        setViewport("lg");
      } else if (window.innerWidth < 1280) {
        setViewport("xl");
      } else {
        setViewport("2xl");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewport;
};

export default useViewport;
