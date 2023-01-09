import React from 'react';
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';

const ItemList = ({ itemcode }) => {
    if (!ItemList.length) {
        return <h3>No Thoughts Yet</h3>;
    }

    return (
        <div>
            {/* <h3>{title}</h3> */}

            {itemcode && itemcode.map((item) =>
                <div key={item.id}>
                    <div className='card'>
                        <div>
                            <div className='bold'> {item.name} </div>
                            {item.itemcode} <br />
                            {item.name} <br />
                            {item.category} <br />
                            {item.brand} <br />
                            {item.inventory} <br />
                            {item.price} <br />
                        </div>
                    </div>
                    <div key={item.id}>
                        <img style={{ width: 250, height: 250 }} src={item.image} className="logo" alt="" />
                    </div>
                </div>
            )}


        </div>
    )
}

export default ItemList;
