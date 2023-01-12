// import logo from './logo.svg';

import React   from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar  from './components/navbar';
import Footer  from './components/footer';
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
//   const [pageSelect, setShop] = useState('Home')      // ES6
const [pageSelect, setShop] = useState('Reviews')      // ES6

  // const Render = () => {      
  // const RenderP = () => {      
    // switch (pageSelect) {
      // case 'Home'   : return  <Route  path="/" element={<Home/>} />
      // case 'Shop'   : return  <Route  path='Greene/:id'  element={<Shop/>} />
      // case 'Reviews': return  <Route  path='Reviews/id'  element={<Reviews/>}/> 
      // case 'Login'  : return  <Route  path='Login/email' element={<Login/>}/>
      // default       : return null
    // }
    // var reactPath = pageSelect+"/:id"
  // }
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
        <Navbar show_screen={pageSelect} set_screen={setShop}/>  
               <Routes>
                  <Route  exact path='/login'   element={<Login/>}/> 
                  <Route  exact path='/greene'  element={<Shop/>} />
                  <Route  exact path='/greene/brainmemory'  element={<Shop/>} />
                  <Route  exact path='/greene/energystress'  element={<Shop/>} />
                  <Route  exact path='/greene/immunesupport'  element={<Shop/>} />
                  <Route  exact path='/greene/sleepmood'  element={<Shop/>} />
                  <Route  exact path='/reviews' element={<Reviews/>} /> 
                  <Route  exact path='/'        element={<Home/>} />                       
                </Routes>

              <Footer/>
        </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;