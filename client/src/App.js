// import logo from './logo.svg';

import React   from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar  from './components/navbar';
import Footer  from './components/footer';
import Header  from './components/header';
import Home    from './pages/home';
import Shop    from './pages/shop';
import Reviews from './pages/reviews';
import Login   from './pages/login';
import { useState } from 'react';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  // const {portfolio, setPortfolio} = useState('About')      // ES6
  const [pageSelect, setShop] = useState('Home')      // ES6
// const [pageSelect, setShop] = useState('Reviews')      // ES6


return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header></Header>
        <Navbar show_screen={pageSelect} set_screen={setShop}/>  
               <Routes>
                  <Route  exact path='/'        element={<Home/>} />
                  <Route  exact path='/login'   element={<Login/>}/> 
                  <Route  exact path='/greene'  element={<Shop/>} />         
                  <Route  exact path='/reviews' element={<Reviews/>} />                    
                </Routes>

              <Footer/>
        </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;