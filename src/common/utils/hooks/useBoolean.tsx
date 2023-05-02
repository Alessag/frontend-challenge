import React from "react";

const useBoolean = (initialValue: boolean) => {
  const [value, setValue] = React.useState(initialValue);

  const toggleValue = () => {
    setValue((prevValue) => !prevValue);
  };

  const setTrue = () => {
    setValue(true);
  };

  const setFalse = () => {
    setValue(false);
  };

  return { value, setValue, toggleValue, setTrue, setFalse };
};
export default useBoolean;
