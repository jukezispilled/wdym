import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import TG from './tg.png';
import Xlogo from './xlogo.jpg';
import Marquee from "react-fast-marquee";

function App() {
  return (
    <div>
    <div className="h-[95vh] bg-cover bg-center" style={{ backgroundImage: "url('/wdym.jpg')" }}>
      <div className='h-screen w-screen flex justify-center'>
        <div className='grid content-center z-40'>
          <motion.a
            href="https://dexscreener.com/solana/2mfnqrdtfqt7l6ftemmnmtehw3dtqs45q63yzsucwjqe"
            className='font-bold text-6xl md:text-8xl lg:text-9xl bg-green-500 p-6 border-2 border-black rounded-lg'
            animate={{ scale: [1, 1.05, 1, 1.03] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            BUY
          </motion.a>
          <div className='pt-8 text-center font-custom text-2xl flex justify-center -mt-3'>
            <a href="https://x.com/wdymsolana" className='p-2 hover:scale-110 transition ease-in-out duration-200'>
              <img src={Xlogo} alt='Xlogo' className='w-12 h-12 rounded-md'></img>
            </a>
            <a href="https://t.me/solwdym" className='p-2 hover:scale-110 transition ease-in-out duration-200'>
              <img src={TG} alt='Tg logo' className='w-12 h-12'></img>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Marquee className="bg-pink-400" speed={125}>
      <div className='h-[5vh] text-3xl md:text-4xl font-bold bg-pink-400'>
        $WDYM $WDYM $WDYM $WDYM $WDYM $WDYM $WDYM $WDYM $WDYM $WDYM $WDYM $WDYM $WDYM $WDYM $WDYM&nbsp;
      </div>
    </Marquee>
    </div>
  );
}

export default App;