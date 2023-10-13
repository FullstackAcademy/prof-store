import React, { useRef, useEffect } from 'react';

const Addresses = ({ addresses, createAddress })=> {
  const el = useRef();
  useEffect(()=> {

  }, []);
  return (
    <div>
      <h2>Addresses</h2>
      <input ref={ el } />
      <ul>
        {
          addresses.map( address => {
            return (
              <li key={ address.id }>
                { address.data.formatted_address }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Addresses;
