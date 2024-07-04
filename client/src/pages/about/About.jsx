import React from 'react'
import Navbar from '../../components/layout/Navbar'
import about1 from '../../assets/images/about/about-1.png'
import about2 from '../../assets/images/about/about-2.png'
import about3 from '../../assets/images/about/about-3.png'
import about4 from '../../assets/images/about/about-4.png'
import tuguImg from '../../assets/images/about/tugu-img.png'
import sideLine from '../../assets/images/about/side-line.png'
import peta from '../../assets/images/about/peta.png'
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
import Footer from '../../components/layout/Footer'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='h-full px-0 pt-24 bg-custom-100'>
            <Navbar />

            <section id='head-section' className='flex max-w-full pb-12 sm:pb-60'>
                <img className='absolute z-10 w-1/3 max-h-full animate__animated animate__fadeInLeft top-24 sm:w-80' src={head4} alt="" />
                <div className='flex flex-col'>
                    <h1 className='z-40 pt-20 ml-10 text-4xl font-bold text-white animate__animated animate__fadeInDown sm:ml-44 sm:text-8xl'>T E N T A N G</h1>
                    <h1 className='z-40 ml-10 text-4xl font-bold tracking-wider text-white animate__animated animate__fadeInUp sm:ml-44 sm:pt-6 sm:text-8xl'>M A L A N G</h1>
                </div>
                <img className='absolute z-30 hidden w-1/3 animate__animated animate__fadeInDown sm:block sm:top-32 sm:right-72 sm:h-2/3 sm:w-96' src={head2} alt="" />
                <img className='absolute right-0 z-0 w-1/3 animate__animated animate__fadeInRight sm:right-28 top-18 sm:top-44 h-1/3 sm:h-2/3 sm:max-w-full' src={head3} alt="" />
                <img className='absolute w-1/3 animate__animated animate__fadeInUp right-12 top-36 sm:top-40 z-1 sm:h-64 sm:w-48' src={head1} alt="" />
            </section>

            <section id='tentang-malang' className='px-6 pt-20 sm:pt-36 sm:px-16'>
                <div className='flex flex-col w-full mb-0 sm:flex-row bg-custom-300 sm:mb-20 rounded-3xl'>
                    <div className='flex flex-col w-full h-full p-4 sm:w-1/2'>
                        <h1 className='py-2 text-xl font-medium text-custom-500 sm:text-2xl'>Tentang Malang</h1>
                        <p className='text-sm text-white font-extralight sm:text-base'>Kota Malang merupakan kota terbesar kedua di Jawa Timur setelah Surabaya. Bersama dengan Kabupaten Malang dan Kota Batu, Kota Malang merupakan bagian dari kesatuan wilayah yang dikenal dengan Malang Raya.</p>
                        <h1 className='py-2 text-xl font-medium text-custom-500 sm:text-2xl'>Kenapa Malang?</h1>

                        <div className='flex flex-col w-full sm:flex-row'>
                            <div className=''>
                                <h3 className='py-2 font-semibold text-custom-500'>- Destinasi bervariasi</h3>
                                <p className='text-sm text-white font-extralight sm:text-base'>Malang terus mengakomodasi berbagai destinasi tak hanya tempat wisata, tapi budaya, kuliner, UMKM, dan lain-lain.</p>
                            </div>

                            <div className='sm:ml-5'>
                                <h3 className='py-2 font-semibold text-custom-500'>- Kemudahan transportasi</h3>
                                <p className='text-sm text-white font-extralight sm:text-base'>Kemajuan transportasi di Malang akan memudahkan mobilitas perjalananmu saat di Malang.</p>
                            </div>
                        </div>

                        <div className='flex flex-col w-full sm:flex-row'>
                            <div className=''>
                                <h3 className='py-2 font-semibold text-custom-500'>- Destinasi bervariasi</h3>
                                <p className='text-sm text-white font-extralight sm:text-base'>Malang terus mengakomodasi berbagai destinasi tak hanya tempat wisata, tapi budaya, kuliner, UMKM, dan lain-lain.</p>
                            </div>

                            <div className='sm:ml-5'>
                                <h3 className='py-2 font-semibold text-custom-500'>- Kemudahan transportasi</h3>
                                <p className='text-sm text-white font-extralight sm:text-base'>Kemajuan transportasi di Malang akan memudahkan mobilitas perjalananmu saat di Malang.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full h-full sm:w-1/2 '>
                        <div className='flex items-center justify-center w-full h-1/2'>
                            <div className='w-1/2 m-3 sm:m-4'>
                                <img className='max-h-full ' src={about1} alt="" />
                            </div>
                            <div className='w-1/2 m-3 sm:m-4'>
                                <img className='max-h-full ' src={about2} alt="" />
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-full h-1/2'>
                            <div className='w-full m-3 sm:m-4'>
                                <img className='max-h-full ' src={about3} alt="" />
                            </div>
                            <div className='w-full m-3 sm:m-4'>
                                <img className='max-h-full ' src={about4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='sejarah' className='flex w-full h-screen pt-20 pl-8 sm:pl-16'>
                <div className='w-2/12 h-full sm:w-1/12'>
                    <img className='sm:h-full' src={sideLine} alt="" />
                </div>
                <div className='flex flex-col w-10/12 h-full pr-8 sm:w-6/12'>
                    <div className='w-full mb-6'>
                        <h1 className='mb-4 text-xl font-bold'>Abad ke - 8 Masehi</h1>
                        <p className='text-sm font-thin sm:text-base'>Daerah ini masih merupakan wilayah kekuasaan Kerajaan Medang. Pada masa itu, daerah ini dikenal dengan sebutan "Malang" yang berasal dari kata Mala yang artinya gunung dan ang yang artinya air. Nama ini merujuk pada kondisi geografis daerah Malang yang dikelilingi oleh pegunungan dan terdapat banyak sumber air.</p>
                    </div>
                    <div className='w-full mb-8'>
                        <h1 className='mb-4 text-xl font-bold'>Abad ke - 16</h1>
                        <p className='text-sm font-thin sm:text-base'>Malang menjadi bagian dari Kesultanan Mataram yang dipimpin oleh Sultan Agung. Selanjutnya, pada abad ke-18, Malang dikuasai oleh Belanda dan dijadikan sebagai daerah kolonial.</p>
                    </div>
                    <div className='w-full mb-8'>
                        <h1 className='mb-4 text-xl font-bold'>Penjajahan Belanda</h1>
                        <p className='text-sm font-thin sm:text-base'>Malang berkembang menjadi pusat perdagangan dan industri. Pada tahun 1914, Malang menjadi ibu kota dari Karesidenan Malang yang meliputi daerah-daerah di Jawa Timur.</p>
                    </div>
                    <div className='w-full'>
                        <h1 className='mb-4 text-xl font-bold'>Setelah merdeka</h1>
                        <p className='text-sm font-thin sm:text-base'>Setelah Indonesia merdeka, Malang menjadi bagian dari Provinsi Jawa Timur dan berkembang menjadi salah satu kota terbesar di Jawa Timur. Kota Malang juga memiliki peran penting dalam sejarah perjuangan kemerdekaan Indonesia, terutama pada masa revolusi fisik</p>
                    </div>
                </div>
                <div className='hidden sm:block sm:w-5/12'>
                    <img className='pl-4 h-5/6 ml-36' src={tuguImg} alt="" />
                </div>
            </section>

            <section id='jelajah' className='px-8 pt-56 sm:pt-20 sm:px-16'>
                <h1 className='text-xl font-bold text-center sm:text-3xl'>Mari Jelalahi Malang</h1>
                <div className='mt-8'>
                    <img src={peta} alt="" />
                </div>
            </section>

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
                <Link to='/destinasi/6659a2f2a876b9cb8569f2f7'>
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
                <Link to='/destinasi/6659a350a876b9cb8569f2f9'>
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
                <Link to='/destinasi/6659a3aeea7e38f121fd3117'>
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
                <Link to='/destinasi/6659a409ea7e38f121fd3119'>
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

            <section id='tips' className='h-full my-6 mt-0 mb-0 font-sans sm:mt-14 sm:mb-12'>
                <h3 className='px-8 text-xl font-medium sm:text-2xl sm:px-16'>Tips berwisata ke Malang</h3>
                <div className='py-6'>
                    <img className='w-full' src={tipsMalang} alt="" />
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About