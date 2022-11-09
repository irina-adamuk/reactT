import { Button } from './Button';
import { Input } from './Input';
import React, { useState } from 'react';

export const Form = () => {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setMessages([...messages, value]);
    setValue('');
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      {visible && (
        <ul>
          {messages.map((message, idx) => (
            <li key={idx}>{message}</li>
          ))}
        </ul>
      )}

      <Input change={handleChange} value={value} />
      <Button name={name} click={handleClick} />

      <button onClick={() => setVisible(!visible)}>
        {visible ? 'hide' : 'show'}
      </button>
    </>
  );
};
