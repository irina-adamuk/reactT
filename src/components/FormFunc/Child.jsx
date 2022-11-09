import React, { memo, useEffect, useState } from 'react';

export const Child = memo(() => {
  const [count, setCount] = useState(0);

  console.log('child render');

  useEffect(() => {
    console.log('child DidMount');
    // setInterval(() => {
    //   console.log(1)
    // }, 1000)

    return () => {
      console.log('Component will unmount');
    };
  }, []);

  return (
    <>
      <h3>Child Component</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
});
