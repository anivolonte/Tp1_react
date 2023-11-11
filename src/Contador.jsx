
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Contador({ candidato}) {
  // eslint-disable-next-line no-undef
  const [count, setCount] = useState(0);

  const incremento = () => {
    setCount(count + 1);
  };

  const decremento = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
    <div id='contador'>
      <h2 className='h2'>{candidato}</h2>
      <p className='numero'>{count}</p>
      <button className='boton' onClick={incremento}>+</button>
      <button className='boton' onClick={decremento}>-</button>
    </div>
    
  </>
  );
}


