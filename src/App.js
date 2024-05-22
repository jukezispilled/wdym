import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { MenuList, MenuListItem, styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import TG from './TG.png';
import Xlogo from './Xlogo.png';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <div className='w-screen h-[135px] bg-[#BEBEBE] relative flex items-center p-2'>
        <div className='absolute top-1 left-1 right-1 w-auto bg-[#000080] text-white text-center py-1'>
          <span>What Do You Meme?</span>
        </div>
        <div className='absolute left-[5%] ml-4 mt-10'>
          <a href='https://dexscreener.com/solana/2mfnqrdtfqt7l6ftemmnmtehw3dtqs45q63yzsucwjqe'>
          <MenuList>
            <MenuListItem>
              <span className='px-3 text-xl'>Buy</span>
            </MenuListItem>
          </MenuList>
          </a>
        </div>
        <div className='absolute left-1/2 transform -translate-x-1/2 mt-10'>
          <img src={`${process.env.PUBLIC_URL}/wdym1.png`} alt="Centered" className='h-20' />
        </div>
        <div className='mt-10 mr-4 absolute right-[10%]'>
          <img src={`${process.env.PUBLIC_URL}/music1.png`} alt="Music" className='h-12' />
        </div>
      </div>
      <div className='w-screen h-[1px] bg-black'></div>
      <div className='h-[85vh] w-screen' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/clouds.png)`}}>
        <div className='h-full flex justify-center items-center text-6xl md:text-9xl font-semibold'>
          <div className=''>
            <span>$WDYM</span>
            <div className='text-xl text-center'>loading....</div>
            <div className='pt-4 text-center font-custom text-2xl flex justify-center -mt-3'>
              <a href="https://x.com/SolanaWDYM" className='p-2 hover:scale-110 transition ease-in-out duration-200'>
                <img src={Xlogo} alt='Xlogo' className='w-12 h-12 rounded-md'></img>
              </a>
              <a href="https://t.me/solwdym" className='p-2 hover:scale-110 transition ease-in-out duration-200'>
                <img src={TG} alt='Tg logo' className='w-12 h-12'></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  </div>
);

export default App;