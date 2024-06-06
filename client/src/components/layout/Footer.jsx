import React from 'react'
import ig from '../../assets/images/universal/instagram.png'
import twit from '../../assets/images/universal/twitter.png'
import fb from '../../assets/images/universal/fb.png'
import jaka from '../../assets/images/universal/jaka.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer id='tips' className='h-full font-sans mt-14'>
        <Link to='/chatbot'>
          <img className='fixed w-20 sm:w-24 right-4 sm:right-8 bottom-4 sm:bottom-8 hover:scale-110' src={jaka} alt="" />
        </Link>
        <div className='flex justify-between w-full px-8 text-white h-72 sm:px-16 pt-14 bg-custom-500'>
          <div className='hidden font-bold sm:block'>MalangKuy</div>
          <div>
            <h1 className='pb-4 font-bold'>Malang</h1>
            <ul className='text-xs font-extralight sm:text-base'>
              <li className='pb-2'>Tentang</li>
              <li className='pb-2'>Destinasi</li>
              <li className='pb-2'>Blog</li>
              <li className='pb-2'>FAQ</li>
            </ul>
          </div>
          <div className='ml-11 sm:ml-0'>
            <h1 className='pb-4 font-bold'>Layanan</h1>
            <ul className='text-xs font-extralight sm:text-base'>
              <li className='pb-2'>Kontak Kami</li>
              <li className='pb-2'>Syarat dan Ketentuan</li>
              <li className='pb-2'>Keamanan Privasi</li>
              <li className='pb-2'>Peta</li>
            </ul>
          </div>
          <div className='ml-6 sm:ml-0'>
            <h1 className='pb-4 font-bold '>Media Sosial</h1>
            <ul className='flex'>
              <li className='hover:cursor-pointer'>
                <img className='' src={fb} alt="" />
              </li>
              <li className='pl-3 hover:cursor-pointer'>
                <img className='' src={twit} alt="" />
              </li>
              <li className='pl-3 pr-4 hover:cursor-pointer'>
                <img className='' src={ig} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full px-8 py-6 text-xs font-thin text-white sm:px-16 sm:text-base bg-emerald-950'>Copyright 2024 MalangKuy. All Rights Reserved</div>
      </footer>
    </div>
  )
}

export default Footer