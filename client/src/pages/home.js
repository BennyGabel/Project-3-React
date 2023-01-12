import './home.css';
// import React, { Component } from 'react';             [AW]
// import ITEMS from './../components/data/items.json';     [OLD]

// import { useQuery } from '@apollo/client';            [AW]

// [OLD]
// const Home = () => {
//   return (
//   <div className='react-container'>
//       Home Landing Page
//   </div>
//   );
// }
// Export Function
import ItemList from '../components/ItemList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_ITEMS_ALL } from '../utils/queries';     [AW]
const Home = () => {
  // const { loading, data } = useQuery(QUERY_ITEMS_ALL); [AW]
  // const greenes = data?.greenes || [];                 [AW]
  // console.log(data);                                   [AW]
  // const name      = data?.name      || [];
  // const brand     = data?.brand     || [];
  // const price     = data?.price     || [];
  // const inventory = data?.inventory || [];
  // const category  = data?.category  || [];
  return (
    <main>
      <div className="flex-row justify-center">
        {/* {loading ? (<div>Loading...</div>) : ( */}
          
          <div className='quadrant'>
            <div className='shopCat1'>
              <h2>Brain</h2>
            </div>
            <div className='shopCat2'>
              <h2>Energy</h2>
            </div>
          </div>
          
          <div className='quadrant'>
            <div className='shopCat3'>
              <h2>Sleep</h2>
            </div>
            <div className='shopCat4'>
              <h2>Immunity</h2>
            </div>
          </div>
      
      </div >
    </main >
          )
  }
export default Home