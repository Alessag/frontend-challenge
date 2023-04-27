import React from "react";
import { Skeleton } from "@mui/material";

const usePlaceholders = (
  numberOfPlaceholders: number,
  width: number,
  height: number
) => {
  const [placeholders, setPlaceholders] = React.useState<Array<any>>([]);
  const array = [...Array(numberOfPlaceholders).keys()];

  React.useEffect(() => {
    setPlaceholders(
      array.map((item) => {
        return (
          <Skeleton
            key={item}
            variant="rectangular"
            width={width}
            height={height}
            animation="wave"
          />
        );
      })
    );
  }, []);

  return { placeholders };
};

export default usePlaceholders;
