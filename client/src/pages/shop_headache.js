import React, { Component }  from 'react';
// import ITEMS from './../components/data/items.json';
import { useQuery } from '@apollo/client';

// import ItemList from '../components/ItemList';


import { QUERY_ITEMS_ALL } from '../utils/queries';
import { useParams } from 'react-router-dom';

const Shop = () => {
  // const {cCategory} = useParams();

  const { loading, data } = useQuery(QUERY_ITEMS_ALL);
  
  // const greenes = data?.greenes || [];
  const greenes = data?.greenes    || [];
  console.log("greenes", greenes)

  greeneFilter = greenes

  // const greeneFilter = greenes.filter(greeneFilter => greeneFilter.category === 'Energy and Stress')   WORK
  // const greeneFilter = greenes.filter(greeneFilter => greeneFilter.category === 'Sleep and Mood')    WORKS
  // console.log(greeneFilter)   WORKS

console.log( "Parameter" + cCategory )
//   category
// : 
// "Brain and Memory"

  // console.log("abc", abc)



//   abc = greenes
// console.log(abc)
  // greenes = greenes.fil
  // "category":"Energy and Stress"
  return (
<div className='react-container'>
    <div id='dropMenu-container'>
      
      {/* <div className= 'dropMenu-size'> */}
      
        {/* <div id='dropMenuSelect'> */}
          <ul id='dropMenuUL'> 

            <a href="/greene/:brain" className='li-items'  >Brain & Memory</a>
            <a href="/greene/:energy" className='li-items'  >Energy and Stress</a>
            <a href="/greene/:immune" className='li-items'  >Immune Support</a>
            <a href="/greene/:sleep" className='li-items'  >Sleep and Mood</a>

          </ul>
          <input id='search-items'></input>
      {/* </div> */}
    </div>

  
    <div className='greene-container'>

{/* {greeneFilter.map((item) => (  */}
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
    </div>
    )
}

// Export Function 
export default Shop
