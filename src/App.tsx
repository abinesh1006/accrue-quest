import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import { useCounterContract } from './hooks/useCounterContract';
import Navbar  from './components/navbar';
import Footer from './components/footer/Footer';

function App() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();

    return (
        <div className='App'>
         <Navbar />


        <h1 className="text-3xl font-bold underline">
            <TonConnectButton ></TonConnectButton>
        </h1>
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
