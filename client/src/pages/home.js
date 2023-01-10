import './home.css';
import React, { Component } from 'react';
// import ITEMS from './../components/data/items.json';     [OLD]
import { useQuery } from '@apollo/client';

import ItemList from '../components/ItemList';
// import ThoughtForm from '../components/ThoughtForm';

import { QUERY_ITEMS_ALL } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ITEMS_ALL);
  const greenes = data?.greenes || [];
  
  // const name      = data?.name      || [];
  // const brand     = data?.brand     || [];
  // const price     = data?.price     || [];
  // const inventory = data?.inventory || [];
  // const category  = data?.category  || [];

  return (
    <main>
      {/* <div className="flex-row justify-center"> */}
      <div className="flex-row">
        {loading ? (<div>Loading...</div>) : (
           <tbody>
            {greenes.map((item) => (
              <div key={item._id}>
                <div className='card'>
                  <div>
                    <div className='bold'> {item.name} </div>
                    {item.category} <br />
                    {item.brand}    <br />
                    {item.price}    <br />
                  </div>
                  <div key={item.id}>
                    <img style={{ width: 250, height: 250 }} src={item.itemcode+'.jpg'} className="logo" alt="" />
                    {/* <img style={{ width: 250, height: 250 }} src='1.jpg' className="logo" alt="" /> */}
                  </div>
                </div>


              </div>


            ))}
          </tbody> 

        )
        }



      </div >
    </main >
  );
}

export default Home