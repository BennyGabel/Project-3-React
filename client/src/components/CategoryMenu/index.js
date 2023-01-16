import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';


// Brain.jpg
// Energy.jpg
// Immunity.jpg
// Sleep.jpg

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {

      dispatch({ type: UPDATE_CATEGORIES, categories: categoryData.categories });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });

    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({ type: UPDATE_CATEGORIES, categories: categories });
      });
    }

  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({ type: UPDATE_CURRENT_CATEGORY, currentCategory: id });
  };

  
  return (
    <div>
      <h2>Choose a Category:</h2>
      <div  className = "flex-row">
      {categories.map((item) => (
      <div className="card px-1 py-1" key={item._id}>
      <button onClick={() => {handleClick(item._id)}} style={{width:'100%'}}  > 
      {item.name} 
      <img  style={{ width: 350, height:200 }} src={'/images/'+item.image} className="four-categories" alt="" />
      </button> 
      
      
      </div>
      ))}
    </div>
    </div>
  );
}

export default CategoryMenu;
