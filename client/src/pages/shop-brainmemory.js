import React, { Component }  from 'react';
// import ITEMS from './../components/data/items.json';
import { useQuery } from '@apollo/client';

// import ItemList from '../components/ItemList';


import { QUERY_ITEMS_ALL } from '../utils/queries';

const Shop = () => {

  const { loading, data } = useQuery(QUERY_ITEMS_ALL);
  const greenes = data?.greenes || [];
  // const categorySelect = () => {
  //   console.log(1)
  //   var showCategoryEl = document.getElementById("category")
  //   cShowCategory = showCategoryEl.innerHTML
  //   alert(cShowCategory)
  // }

  return (
<div className='react-container'>
    <div id='dropMenu-container'>
      
      {/* <div className= 'dropMenu-size'> */}
      
        {/* <div id='dropMenuSelect'> */}
    
</div> <div id='dropMenuUL-btn'>
        <div class="container" onclick="myFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
          <ul id='dropMenuUL'> 
              <li className='li-items'  ><a className='li-items' href='/greene'>Brain & Memory</a></li>
              <li className='li-items'  ><a className='li-items' href='/shop-energystress'>Energy and Stress</a></li>
              <li className='li-items'  ><a className='li-items' href='/shop-immunesupport'>Immune Support</a></li>
              <li className='li-items'  ><a className='li-items' href='/shop-sleepmood'>Sleep and Mood</a></li>
          </ul>
        </div>
        <div id='searchItems-btn'>
          <input id='search-items'></input>
        </div> 
      {/* </div> */}
    </div>

  
    <div className='greene-container'>

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