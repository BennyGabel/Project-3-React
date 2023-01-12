import './home.css';
import React, { Component } from 'react';
import { useQuery } from '@apollo/client';

// import ItemList from '../components/ItemList';


import { QUERY_ITEMS_ALL } from '../utils/queries';
// import { QUERY_CATEGORIES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ITEMS_ALL);

  const greenes = data?.greenes || [];

  // const name      = data?.name      || [];
  // const brand     = data?.brand     || [];
  // const price     = data?.price     || [];
  // const inventory = data?.inventory || [];
  // const category  = data?.category  || [];
  // const categ1 = document.createElement('section'); categ1.setAttribute('class','greene-categ');
  // const categ2 = document.createElement('section'); categ1.setAttribute('class','greene-categ');
  // var ctgCnt = 1;
  // for( let ctgry of category){
  //   var newCateg = document.createElement('div'); 
  //   newCateg.setAttribute('class','greene-categ-item');
  //   newCateg.textContent = ctgry;
  //   if(ctgCnt<3){
  //     categ1.appendChild(newCateg);
  //   }else{
  //     categ2.appendChild(newCateg);
  //   }
  //   ctgCnt +=1;
  // }

  return (
    <div className='react-container'>
  {/* //  <main> */}
  
      <div className='greene-container'>

      {loading ? (<div>Loading...</div>) : (
        
        <div>

          {/*    let's set up home page to be quadrant of categories */}
          {greenes.map((item) => (
              <div className='greene-item-container'>
                <div key={item.id}>
                  <div className='greene-box'>
                    <div>
                      <div className='greene-labels'> {item.name} </div>
                      {item.itemcode} <br />
                      {item.category} <br />
                      {item.brand}    <br />
                      {item.price}    <br />
                    </div>
                    <div key={item.id}>
                      <img style={{ height: 250 }} src={item.image} alt="" />
                    </div>
                  </div>
                </div>
              </div>  
            ))
          }



        </div> 
        )
          }
      </div >
    {/* </main > */}
    </div>
  );
}

export default Home