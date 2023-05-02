import React from "react";
import useBoolean from "./useBoolean";

type Viewport = "sm" | "md" | "lg" | "xl" | "2xl";

const useViewport = () => {
  const [viewport, setViewport] = React.useState<Viewport>("sm");
  const { value: isSmallViewport, setValue: setIsSmallViewport } =
    useBoolean(true);
  const { value: isMediumViewport, setValue: setIsMediumViewport } =
    useBoolean(false);

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

  React.useEffect(() => {
    const handleResize = () => {
      setIsMediumViewport(viewport === "sm" || viewport === "md");
      setIsSmallViewport(
        viewport === "sm" || viewport === "md" || viewport === "lg"
      );
    };

    handleResize();
  }, [viewport]);

  return { viewport, isSmallViewport, isMediumViewport };
};

export default useViewport;
