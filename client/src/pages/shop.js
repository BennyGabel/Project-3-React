import React  from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS_ALL } from '../utils/queries';

const Shop = () => {
  const { loading, data } = useQuery(QUERY_ITEMS_ALL);
  
  const greenes = data?.greenes    || [];
console.log(greenes);

  return (
<div className='react-container'>
    <div id='dropMenu-container'>
      
      {/* <div className= 'dropMenu-size'> */}
      
        {/* <div id='dropMenuSelect'> */}
          <ul id='dropMenuUL'> 

            <li  className='li-items brain'  >Brain & Memory</li>
            <li  className='li-items energy'  >Energy and Stress</li>
            <li  className='li-items immune'  >Immune Support</li>
            <li  className='li-items sleep'  >Sleep and Mood</li>

          </ul>
          <input id='search-items'></input>
      {/* </div> */}
    </div>

  
    <div className='greene-container'>

    {loading ? (<div>Loading...</div>) : (
      <div>
     {greenes.map((item) => (
        <div className='greene-item-container'>
          <div key={item.id}>
            <div className='greene-box'>
                    <div>
                      <div className='greene-labels'> {item.name} </div>
                      {item.category} <br />
                      {item.brand}    <br />
                      {item.price}    <br />
                    </div>
                    <div key={item.id}>
                      <img style={{ width: 250, height: 250 }} src={item.image} alt="" />
                    </div>
                  </div>
                </div>
              </div>  
            ))
          }
        </div> 
          )
        }
        </div>
    </div>
    )
}

// Export Function 
export default Shop
