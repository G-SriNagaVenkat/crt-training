import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(10);
  const [theme, setTheme] = useState('light');

  return (<>
    <div className='container-fluid'>
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', height: '100vh', width: '100vw',top:'0' ,alignItems:'center'}}>
      <p style={{ color: theme === 'light' ? '#333' : '#fff',top:'0' }}>Count: {count}</p>
      <button style={{ backgroundColor: theme === 'light' ? '#333' : '#fff', color: theme === 'light' ? '#fff' : '#333' }} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{ backgroundColor: theme === 'light' ? '#333' : '#fff', color: theme === 'light' ? '#fff' : '#333' }} onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={{ backgroundColor: theme === 'light' ? '#333' : '#fff', color: theme === 'light' ? '#fff' : '#333' }} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change Theme
        </button>
    </div>
    </div>
    </>
  );
}
export default Counter;