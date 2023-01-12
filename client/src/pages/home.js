import './home.css';

const Home = () => {

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