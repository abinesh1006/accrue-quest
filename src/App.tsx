import './App.css';

import Navbar  from './components/navbar';
import Coming from './components/coming/comingsoon'
import Footer from './components/footer/Footer'
function    App() {


    return (
        <div className='App'>
         <Navbar />

            <Coming />
         <Footer></Footer>
               </div>
 //   <div className='App'>
 //<Navbar />
 //     {/*<div className='Container'>*/}
 //     {/*  <TonConnectButton ></TonConnectButton>*/}
 //     {/*  <div className='Card'>*/}
 //     {/*    <b>Counter Address</b>*/}
 //     {/*    <div className='Hint'>{address?.slice(0, 30) + '...'}</div>*/}
 //     {/*  </div>*/}

 //     {/*  <div className='Card'>*/}
 //     {/*    <b>Counter Value</b>*/}
 //     {/*    <div>{value ?? 'Loading...'}</div>*/}
 //     {/*  </div>*/}

 //     {/*  <a*/}
 //     {/*    className={`Button ${connected ? 'Active' : 'Disabled'}`}*/}
 //     {/*    onClick={() => {*/}
 //     {/*      sendIncrement();*/}
 //     {/*    }}*/}
 //     {/*  >*/}
 //     {/*    Increment*/}
 //     {/*  </a>*/}
 //     {/*</div>*/}
 //<Footer/>
 //   </div>
  );
}

export default App
