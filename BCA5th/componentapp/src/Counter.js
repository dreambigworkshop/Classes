import React, { useState } from "react";

export default function Counter(props) {
  let { initial } = props;
  const [counter, setCounter] = useState(initial);
  const [user, setUser] = useState({});

  function Increase() {
    setCounter(counter + 1);
  }

  function Decrease() {
    setCounter(counter - 1);
  }

  function HandleChange(e) {
    console.log(e.target.value);
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  }

  function Submit() {
      //send it with api
    console.log(user);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={Increase}>Add</button>
      <button onClick={Decrease}>Sub</button>

      <div>
        <input name="email" placeholder="email" onChange={HandleChange} />
        <input name="password" placeholder="password" onChange={HandleChange} />
        <button onClick={Submit}>Submit</button>
      </div>
    </div>
  );
}
