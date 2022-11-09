import { Child } from './Child';
import React, { useEffect, useState } from 'react';

export const Parent = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log('parent DidMount');
    // setInterval(() => {
    //   console.log(1)
    // }, 1000)
  }, []);

  useEffect(() => {
    console.log('toggle and count changed');
  }, [count, toggle]);
  return (
    <>
      <h3>Parent Component</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={() => setToggle(!toggle)}>toggle</button>

      <hr />

      {toggle && <Child count={0} />}
    </>
  );
};
