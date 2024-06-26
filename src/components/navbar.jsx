import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from '../hooks/useTonConnect';
import { useCounterContract } from '../hooks/useCounterContract';
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
 
	return (
		<nav className="flex items-center justify-between flex-wrap bg-neutral-50 border-2 p-2 fixed w-full z-10 top-0">
			<div className="flex items-center flex-shrink-0 text-black mr-2">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
				</svg>

			
				<ul className="list-reset items-center lg:flex justify-end inline-block">
					<a className="text-black  italic font-black no-underline hover:underline decoration-indigo-300" href="/">
					<span className="text-1xl pl-2"><i className="em em-grinning"></i>AccrueQuest</span>
			  </a>
				
					
					<li className="mr-3 inline-block">
						<a className="inline-block text-black no-underline decoration-indigo-300 hover:underline py-2 px-4" href="#b">link</a>
				  </li>
			
			  </ul>
			</div>
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<TonConnectButton ></TonConnectButton>

			</div>
	  </nav>

  );
};

export default Navbar;