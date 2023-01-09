import React, { Component }  from 'react';
// import ITEMS from './../components/data/items.json';     [OLD]
import { useQuery } from '@apollo/client';


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

import { QUERY_ITEMS_ALL } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ITEMS_ALL);
  const greenes  = data?.greenes  || [];
  console.log(data);
  // const name      = data?.name      || [];
  // const brand     = data?.brand     || [];
  // const price     = data?.price     || [];
  // const inventory = data?.inventory || [];
  // const category  = data?.category  || [];
  
  return (
    <main>
      <div className="flex-row justify-center">
        {/* <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ItemList />
        </div> */}
        <div className="col-12 col-md-8 mb-3">
          {loading ? (<div>Loading...</div> ) : (
            <ItemList 
              items={greenes}
              // name ={name}
              // brand={brand}
              // price={price}
              // inventory={inventory}
              // category={category}
              title="Some Feed for item(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default Home