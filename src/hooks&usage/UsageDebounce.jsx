import { useEffect, useState } from "react";
import useDebounce from "../custom-hooks/useDebounce";

const UsageDebounce = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 5000);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);

  return (
    <div>
      <p>Value real-time: {value}</p>
      <p>Debounced value: {debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default UsageDebounce;
