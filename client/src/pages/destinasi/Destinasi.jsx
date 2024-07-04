import React, { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import useDestination from "../../hooks/useDestination";
import Footer from "../../components/layout/Footer";
import tipsMalang from '../../assets/images/universal/tips-malang.png'
import semeru from '../../assets/images/about/semeru-about.png'
import jatimPark from '../../assets/images/about/jtp-about.png'
import museumAngkut from '../../assets/images/about/museum-about.png'
import tuguMalang from '../../assets/images/about/tugu-about.png'
import cobanRondo from '../../assets/images/about/coban-about.png'
import head1 from '../../assets/images/about/head-about2.png'
import head2 from '../../assets/images/about/head-aboutt.png'
import head3 from '../../assets/images/about/head-about3.png'
import head4 from '../../assets/images/about/head-about4.png'
import { Link } from 'react-router-dom';

function Destinasi() {
    const { destinasi, loading, error} = useDestination();
    const baseUrl = 'http://localhost:3000/storage';
    return (
        <div className='h-full pt-24 font-sans bg-custom-100'>
          <Navbar />
    
          <section id='head-section' className='flex max-w-full pb-12 sm:pb-60'>
            <img className='absolute z-10 w-1/3 max-h-full animate__animated animate__fadeInLeft top-24 sm:w-80' src={head4} alt="" />
            <div className='flex flex-col'>
              <h1 className='z-40 pt-20 ml-10 text-4xl font-bold text-white animate__animated animate__fadeInDown sm:ml-40 sm:text-8xl'>D E S T I N A S I</h1>
              <h1 className='z-40 ml-10 text-4xl font-bold tracking-wider text-white animate__animated animate__fadeInUp sm:ml-40 sm:pt-6 sm:text-8xl'>M A L A N G</h1>
            </div>
            <img className='absolute z-30 hidden w-1/3 animate__animated animate__fadeInDown sm:block sm:top-32 sm:right-72 sm:h-2/3 sm:w-96' src={head2} alt="" />
            <img className='absolute right-0 z-0 w-1/3 animate__animated animate__fadeInRight sm:right-28 top-18 sm:top-44 h-1/3 sm:h-2/3 sm:max-w-full' src={head3} alt="" />
            <img className='absolute w-1/3 animate__animated animate__fadeInUp right-12 top-36 sm:top-40 z-1 sm:h-64 sm:w-48' src={head1} alt="" />
          </section>
    
    
          <iframe className='w-full pt-20 h-72 sm:h-screen sm:pt-36' src='https://www.youtube.com/embed/fC2TW1mshxs?si=9jfWTZmcXU9otGgn'
            frameborder='0'
              allow='autoplay; encrypted-media'
            allowfullscreen
            title='video'
          />
    
          <section id='destinasi' className='px-8 pt-10 sm:pt-20 sm:px-16'>
            <h1 className='text-xl font-medium sm:text-2xl text-start'>Destinasi Malang</h1>
            <div className=''>
              <div className="grid w-full grid-cols-3 gap-2 py-6 sm:py-12 sm:gap-10 sm:mb-12">
                <div className="row-span-2 shadow-md md:col-span-1 bg-custom-300 rounded-xl">
                  <div className='flex flex-col'>
                    <Link to='/destinasi/6659a1873585d490e3af3762'>
                      <div className='relative w-full h-full group'>
                        <img className='w-full h-full transition-transform duration-500 transform group-hover:brightness-75' src={semeru} alt="" />
                        <div className="absolute text-xs font-semibold text-white transition-opacity duration-500 opacity-0 top-16 left-10 lg:top-44 lg:left-32 lg:text-5xl group-hover:opacity-100">
                          Semeru
                        </div>
                      </div>
    
                    </Link>
                    {/* <div className='mx-4 mb-16'>
                                        <h1 className='my-4 font-bold'>Berburu Sunrise</h1>
                                        <p className='font-thin'>Melihat matahari terbit di Gunung Semeru merupakan pengalaman yang luar biasa. Maka dari itu, banyak orang berlomba-lomba datang pagi buta untuk mendapatkan pemandangan matahari terbit.</p>
                                    </div> */}
                  </div>
                </div>
                <div className="shadow-md md:col-span-1 bg-custom-300 rounded-xl">
                  <div className='flex flex-col'>
                    <Link to='/destinasi/jatim-park'>
                      <div className='relative w-full h-full group'>
                        <img className='w-full h-full transition-transform duration-500 transform group-hover:brightness-75' src={jatimPark} alt="" />
                        <div className="absolute text-xs font-semibold text-white transition-opacity duration-500 opacity-0 top-16 left-10 lg:top-44 lg:left-32 lg:text-5xl group-hover:opacity-100">
                          Jatim Park
                        </div>
                      </div>
                    </Link>
                    {/* <div className='mx-4 mb-6'>
                                        <h1 className='my-4 font-bold'>Camping</h1>
                                        <p className='font-thin'>Ranu Kumbolo adalah salah satu tempat peristirahatan para pendaki untuk mendirikan tenda yang tak cuma sebagai tempat melepas penat tapi juga memanjakan mata.</p>
                                    </div> */}
                  </div>
                </div>
    
                <div className="row-span-3 shadow-md md:col-span-1 bg-custom-300 rounded-xl">
                  <div className='flex flex-col'>
                    <Link to='/destinasi/coban-rondo'>
                      <div className='relative w-full h-full group'>
                        <img className='w-full h-full transition-transform duration-500 transform group-hover:brightness-75' src={cobanRondo} alt="" />
                        <div className="absolute text-xs font-semibold text-white transition-opacity duration-500 opacity-0 top-16 left-10 lg:top-44 lg:left-32 lg:text-5xl group-hover:opacity-100">
                          Coban Rondo
                        </div>
                      </div>
                    </Link>
                    {/* <div className='mx-4 mb-16'>
                                        <h1 className='my-4 font-bold'>Pendakian</h1>
                                        <p className='font-thin'>Ke Gunung Semeru pasti sangat lekat dengan pendakian. Pastikan menggunakan rute yang sudah dipastikan aman untuk mendapatkan pengalaman mendaki yang baik.</p>
                                    </div> */}
                  </div>
                </div>
    
                <div className="row-span-2 shadow-md md:col-span-1 bg-custom-300 rounded-xl">
                  <div className='relative flex flex-col group'>
                    <Link to='/destinasi/tugu-malang'>
                      <div className='w-full h-full'>
                        <img className='w-full h-full transition-transform duration-500 transform group-hover:brightness-75' src={tuguMalang} alt="" />
                        <div className="absolute text-xs font-semibold text-white transition-opacity duration-500 opacity-0 top-16 left-10 lg:top-44 lg:left-32 lg:text-5xl group-hover:opacity-100">
                          Tugu Malang
                        </div>
                      </div>
                    </Link>
                    {/* <div className='mx-4 mb-16'>
                                        <h1 className='my-4 font-bold'>Sensasi Mobil Jeep</h1>
                                        <p className='font-thin'>Menaiki Mobil Jeep di medan pegunungan tentunya menantang adrenalin dan sangat cocok bagi kamu yang menyukai tantangan.</p>
                                    </div> */}
                  </div>
                </div>
    
                <div className="shadow-md md:col-span-1 bg-custom-300 rounded-xl">
                  <div className='flex flex-col'>
                    <Link to='/destinasi/museum-angkut'>
                      <div className='relative w-full h-full group'>
                        <img className='w-full h-full transition-transform duration-500 transform group-hover:brightness-75' src={museumAngkut} alt="" />
                        <div className="absolute text-xs font-semibold text-white transition-opacity duration-500 opacity-0 top-16 left-10 lg:top-32 lg:left-14 lg:text-5xl group-hover:opacity-100">
                          Museum Angkut
                        </div>
                      </div>
                    </Link>
                    {/* <div className='mx-4 mb-6'>
                                        <h1 className='my-4 font-bold'>Mengunjungi Arcopodo</h1>
                                        <p className='font-thin'>Arcopodo adalah dua arca yang berdampingan di dalam hutan Gunung Semeru. Kedua arca tersebut sama-sama menghadap ke utara yang berarti pula menatap lurus ke arah Puncak Mahameru.</p>
                                    </div> */}
                  </div>
                </div>
    
    
              </div>
            </div>
          </section>
    
    
          <section id='tips' className='h-full my-6 mb-0 font-sans sm:mt-14 sm:mb-12'>
            <h3 className='px-8 text-xl font-medium sm:text-2xl sm:px-16'>Tips berwisata ke Malang</h3>
            <div className='py-6 '>
              <img className='w-full' src={tipsMalang} alt="" />
            </div>
          </section>
          <Footer />
        </div>
      );
}

export default Destinasi;
