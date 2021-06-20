import React, { useEffect, useState } from "react";

export default function CounterComponent(props) {
  let { initialValue } = props;
  
  //state
  const [counter, setCounter] = useState(initialValue);
  useEffect(() => {
    setObj({
      name: "hero",
      address: "hiralaal",
      counter: counter
    });
  }, [counter]);
  const [time, setTime] = useState(
    new Date().getHours() +
      "-" +
      new Date().getMinutes() +
      "-" +
      new Date().getSeconds()
  );
  const [obj, setObj] = useState("");
  const IncreaseCounte = () => {
    setCounter(counter + 1);
    setTime(
      new Date().getHours() +
        "-" +
        new Date().getMinutes() +
        "-" +
        new Date().getSeconds()
    );
  };

  console.log("Obj", obj);
  return (
    <div>
      <div>Time: {time}</div>
      <div>{counter}</div>
      <button id="increase" onClick={IncreaseCounte}>
        Increase Counter
      </button>
    </div>
  );
}