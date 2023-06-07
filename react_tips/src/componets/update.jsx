import { useState } from "react";

const Update = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };
  const asycnIncrease = () => {
    setTimeout(() => {
      setNumber(number + 1);
    }, 2000);
  };
  return (
    <div>
      <button onClick={increase}>increase</button>
      <button onClick={asycnIncrease}>increase</button>
      <h1>{number}</h1>
    </div>
  );
};

export default Update;
