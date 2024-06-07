import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import cloud1 from "../assets/images/landing/parallax/cloud1.png";
import cloud2 from "../assets/images/landing/parallax/cloud2.png";
import cloud3 from "../assets/images/landing/parallax/cloud3.png";
import mountain1 from "../assets/images/landing/parallax/mountain 1.png";
import mountain2 from "../assets/images/landing/parallax/mountain 2.png";
import mountain3 from "../assets/images/landing/parallax/mountain 3.png";
import tree from "../assets/images/landing/parallax/tree.png";
import bird from "../assets/images/landing/parallax/bird.png";
import ground from "../assets/images/landing/parallax/ground.png";
import bromohead from "../assets/images/landing/Bromo.png";
import malanghead from "../assets/images/landing/malang.png";
import playicon from "../assets/images/landing/play.png";
import mulai from "../assets/images/landing/mulai.png";
import nikmati from "../assets/images/landing/nikmati.png";
import satu from "../assets/images/landing/1.png";
import dua from "../assets/images/landing/2.png";
import tiga from "../assets/images/landing/3.png";
import empat from "../assets/images/landing/4.png";
import lima from "../assets/images/landing/5.png";
import enam from "../assets/images/landing/6.png";
import frame from "../assets/images/landing/frame.png";
import bot2 from "../assets/images/landing/bot2.png";
import left from "../assets/images/landing/left.png";
import right from "../assets/images/landing/right.png";
import sunset from "../assets/images/landing/sunset.png";
import santerra from "../assets/images/landing/santerra.png";
import angkot from "../assets/images/landing/angkot.png";
import arrow from "../assets/images/landing/arrow.png";
import starlima from "../assets/images/landing/rate 5.png";
import tipsMalang from "../assets/images/universal/tips-malang.png";
import starempat from "../assets/images/landing/rate 4.png";
import FaQItem from "../components/faq/FaqItem";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ParallaxSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll(".parallax");

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed");
        const distance = window.scrollY * speed;

        element.style.transform = `translateY(-${distance}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll(".parallax2");

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed");
        const distance = window.scrollY * speed;

        element.style.transform = `translateY(${distance}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="parallax"
      className="relative flex items-center justify-center mt-0 pb-96 sm:relative sm:flex sm:items-center sm:justify-center sm:pb-96 sm:h-screen md:relative md:flex md:items-center md:justify-center md:pb-96 md:h-screen lg:relative lg:flex lg:items-center lg:justify-center lg:pb-96 lg:h-screen xl:relative xl:flex xl:items-center xl:justify-center xl:pb-96 xl:h-screen 2xl:relative 2xl:flex 2xl:items-center 2xl:justify-center 2xl:pb-96 2xl:h-screen bg-custom-100"
    >
      <img
        src={bird}
        className="absolute w-auto h-6 left-1/4 top-96 sm:absolute sm:w-auto sm:h-12 sm:left-1/4 sm:top-80 sm:mt-56 md:absolute md:w-auto md:h-12 md:left-1/4 md:top-96 lg:absolute lg:w-auto lg:h-12 lg:left-1/4 lg:top-96 xl:absolute xl:w-auto xl:h-12 xl:left-1/4 xl:top-96 2xl:absolute 2xl:w-auto 2xl:h-12 2xl:left-1/4 2xl:top-96 parallax "
        data-speed="0.6"
        alt="Bird"
      />
      <img
        src={cloud1}
        className="absolute w-1/4 mb-3 ml-32 h-34 bottom-16 sm:absolute sm:w-1/3 sm:h-34 sm:left-44 sm:top-96 sm:mt-72 md:absolute md:w-1/3 md:h-34 md:mt-48 md:left-44 md:top-96 lg:absolute lg:w-1/3 lg:h-30 lg:left-80 lg:top-96 lg:mt-56 xl:absolute xl:w-1/3 xl:h-34 xl:left-96 xl:top-96 2xl:absolute 2xl:w-1/3 2xl:h-34 2xl:left-96 2xl:ml-96 2xl:top-52 parallax"
        data-speed="0.1"
        alt="Cloud 1"
      />
      <img
        src={cloud2}
        className="absolute h-24 w-60 bottom-8 right-48 sm:absolute sm:w-1/3 sm:h-34 sm:top-96 sm:right-80 sm:mt- md:absolute md:w-1/3 md:h-34 md:mt-48 md:left-24 lg:absolute lg:w-1/3 lg:h-34 lg:top-96 lg:mt-56 lg:right-80 xl:absolute xl:w-1/3 xl:h-34 xl:top-96 xl:right-80 2xl:absolute 2xl:w-1/3 2xl:h-52 2xl:top-52 2xl:right-96 parallax"
        data-speed="0.2"
        alt="Cloud 2"
      />
      <img
        src={cloud3}
        className="absolute right-0 w-24 h-20 bottom-32 sm:absolute sm:w-64 sm:h-34 sm:top-80 sm:mt-80 sm:right-0 md:absolute md:w-64 md:h-34 md:mt-72 md:right-0 lg:absolute lg:w-64 lg:h-34 lg:top-96 lg:mt-10 lg:right-0 xl:absolute xl:w-64 xl:h-34 xl:top-64 xl:right-0 2xl:absolute 2xl:w-64 2xl:h-48 2xl:right-0 parallax"
        data-speed="0.4"
        alt="Cloud 3"
      />
      {/* <img
        src={mountain3}
        className="absolute left-0 z-10 bottom-16 sm:absolute sm:top-72 sm:pt-80 sm:mt-4 sm:left-0 md:absolute md:pt-64 md:left-0 lg:absolute lg:top-56 lg:mt-14 lg:left-0 xl:absolute xl:top-80 xl:left-0 2xl:absolute 2xl:top-0 2xl:left-0 parallax"
        data-speed="0.1"
        alt="Mountain 3"
      /> */}
      <img
        src={mountain2}
        className="absolute left-0 z-10 bottom-8 sm:absolute sm:-bottom-3 sm:left-0 md:absolute md:bottom-10 md:left-0 lg:absolute lg:bottom-20 lg:left-0 xl:absolute xl:bottom-32 xl:left-0 2xl:absolute 2xl:bottom-32 2xl:left-0 parallax"
        data-speed="0.1"
        alt="Mountain 2"
      />
      <img
        src={mountain1}
        className="absolute left-0 z-10 mb-5 -bottom-9 sm:absolute sm:-bottom-24 sm:left-0 md:absolute md:-bottom-16 md:left-0 lg:absolute lg:-bottom-16 lg:left-0 xl:absolute xl:-bottom-8 xl:left-0 2xl:absolute 2xl:-bottom-8 2xl:left-0 parallax"
        data-speed="0.1 "
        alt="Mountain 1"
      />
      {/* <img
        src={tree}
        className="absolute left-0 z-10 -bottom-9 sm:absolute sm:-bottom-24 sm:left-0 md:absolute md:left-0 lg:absolute lg:-bottom-24 lg:left-0 xl:absolute xl:-bottom-24 xl:left-0 2xl:absolute 2xl:-bottom-24 2xl:left-0 parallax"
        data-speed="0.1"
        alt="Tree"
      /> */}
      <img
        src={ground}
        className="absolute left-0 z-10 -bottom-10 sm:absolute sm:-bottom-24 sm:left-0 md:absolute md:-bottom- md:left-0 lg:absolute lg:-bottom-24 lg:left-0 xl:absolute xl:-bottom-24 xl:left-0 2xl:absolute 2xl:-bottom-24 2xl:left-0 parallax"
        data-speed="0.1"
        alt="Ground"
      />
      <div className="flex flex-col w-full h-full pt-36 ">
        <h1 className="font-bold text-center text-custom-300 ">
          <span
            className="absolute text-2xl font-bold top-36 left-36 sm:text-3xl sm:absolute sm:left-12 sm:pl-52 md:text-4xl md:absolute md:left-28 md:pl-72 lg:text-4xl lg:absolute lg:left-1/3 lg:pl-36 xl:text-4xl xl:absolute xl:left-96 xl:pl-36 2xl:text-4xl 2xl:absolute 2xl:left-1/3 2xl:pl-52 parallax2"
            data-speed="0.8"
          >
            WONDERFUL OF
          </span>
          <br />
          <span
            className="absolute pt-10 ml-3 text-5xl font-bold left-24 top-36 sm:text-7xl sm:absolute sm:left-72 sm:pl-52 sm:pt-10 md:text-7xl md:absolute md:left-26 md:pl-2 md:pt-10 lg:text-8xl lg:absolute lg:left-1/4 lg:pl-2 lg:pt-10 xl:text-8xl xl:absolute xl:left-96 xl:pl-8 xl:pt-10 2xl:text-8xl 2xl:absolute 2xl:left-1/3 2xl:pl-20 2xl:pt-10 parallax2"
            data-speed="0.8"
          >
            M A L A N G
          </span>
        </h1>
      </div>
    </section>
  );
};



function Home() {
  return (
    <div className="bg-custom-300">
      <Navbar />
      <ParallaxSection />
      <div className="flex flex-col items-center body parallax bg-custom-300 xl:pt-24 ">
        <div id="body 1" className="w-11/12 p-6 ">
          <div
            id="tentang malang"
            className="rounded-lg sm:flex h-80 sm:justify-normal"
          >
            <div className="relative flex bg-custom-100 rounded-xl ">
              <img
                src={bromohead}
                alt="bromo"
                className="relative h-44 left-10 xl:h-96 xl:left-10 xl:bottom-7 md:h-full 2xl:h-96 2xl:left-10 2xl:bottom-7 transform translate-x-[-20px]"
              />
              <img
                src={malanghead}
                alt="kota malang"
                className="relative h-44 left-16 xl:h-96 xl:left-20 xl:bottom-7 md:h-full 2xl:h-96 2xl:left-20 2xl:bottom-7 transform translate-x-[-20px]"
              />
              <img
                src={playicon}
                alt=""
                className="relative right-5 top-20 w-7 h-7 sm:right-10 sm:top-36 sm:w-10 sm:h-10"
              />
            </div>
            <div className="flex flex-col justify-center p-5 pl-6 mt-2 bg-custom-100 rounded-xl md:pl-10 xl:pl-80 2xl:pl-32 sm:p-0 text-start">
              <p className="pb-3 font-semibold lg:text-xl xl:text-2xl 2xl:text-4xl">
                Tentang Malang
              </p>
              <p className="pb-3 mr-3 text-sm text-justify lg:text-xs xl:text-lg 2xl:text-xl sm:text-base">
                Kota Malang adalah sebuah kota yang terletak di provinsi Jawa
                Timur, Indonesia. Kota terbesar kedua di Jawa Timur setelah Surabaya, dan
                kota terbesar ke-12 di Indonesia. Kota ini didirikan pada masa Pemerintahan Belanda pada
                tanggal 1 April 1914 dengan E.K Broeveldt sebagai wali kota
                pertama.
              </p>
              <Link to='/about'>
              <p className="p-3 font-semibold text-center text-white rounded-full bg-custom-200 hover:bg-custom-500 w-fit lg:p-1 xl:p-2 xl:text-xs 2xl:p-4">
                Selengkapnya
              </p>
              </Link>
            </div>
          </div>
          
          <div
            id="mulai petualangan"
            className="mb-10 mt-52 sm:mt-0 sm:pt-10 lg:pt-20 xl:pt-48 2xl:pt-48"
          >
            <div className="flex justify-center gap-3 text-xs font-bold text-white sm:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl sm:gap-5 lg:gap-5 xl:gap-10 2xl:gap-20">
              <p>MULAI TEMUKAN</p>
              <img
                src={mulai}
                className="hidden w-auto h-2 sm:block sm:h-10 lg:h-14 xl:h-16"
              />
              <p className="text-custom-500 sm:text-white">PETUALANGAN</p>
            </div>
            <div className="flex justify-center gap-3 pt-4 text-xs font-bold text-white sm:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl sm:gap-5 lg:gap-5 xl:gap-10 2xl:gap-20">
              <p className="text-custom-500 sm:text-white">NIKMATI</p>
              <img
                src={nikmati}
                className="hidden w-auto h-2 sm:block sm:h-10 lg:h-14 xl:h-16"
              />
              <p>PENGALAMAN MENAKJUBKAN</p>
            </div>
          </div>

          <div id="card" className="grid grid-cols-2 gap-6 p-5 mt-20 sm:grid-cols-4">
            <Link to='destinasi/museum-angkut'>
            <div className="relative group">
              <img
                src={satu}
                alt=""
                className="w-full transition-transform duration-500 transform group-hover:brightness-75"
              />
              <div className="absolute text-xs font-semibold text-white transition-opacity duration-500 opacity-0 top-16 left-4 lg:top-44 lg:left-30 lg:text-5xl group-hover:opacity-100">
                Museum Angkut 
              </div>
            </div>
            </Link>
            <div className="">
              <img src={frame} alt="" />
              <p className="relative font-semibold text-white bottom-10 left-2 sm:bottom-20 sm:left-4 tex lg:bottom-24 lg:left-4 xl:bottom-36 xl:left-8 lg:text-2xl xl:text-4xl 2xl:text-5xl">
                Wonderful
              </p>
            </div>
            <Link to='/destinasi/coban-rondo'>
            <div className="relative group">
              <img
                src={dua}
                alt=""
                className="w-full transition-transform duration-500 transform group-hover:brightness-75"
              />
              <div className="absolute text-xs font-semibold text-white transition-opacity duration-500 opacity-0 top-16 left-6 lg:top-44 lg:left-14 lg:text-5xl group-hover:opacity-100"/>
              <div className="absolute text-xs font-semibold text-white transition-opacity duration-500 opacity-0 top-16 left-6 lg:top-44 lg:left-12 lg:text-5xl group-hover:opacity-100">
                Coban Rondo
              </div>
            </div>
            </Link>
            <Link to='/destinasi/jatim-park'>
            <div className="relative group">
              <img
                src={tiga}
                alt=""
                className="w-full transition-transform duration-500 transform group-hover:brightness-75"
              />
              <div className="absolute text-xs font-semibold text-white transition-opacity duration-500 opacity-0 top-16 left-8 lg:top-44 lg:left-30 lg:text-5xl group-hover:opacity-100">
                Jatim Park 
              </div>
            </div>
            </Link>
            <Link to='/destinasi/tugu-malang'>
            <div className="relative group">
              <img
                src={empat}
                alt=""
                className="w-full transition-transform duration-500 transform group-hover:brightness-75"
              />
              <div className="absolute text-xs font-semibold text-center text-white transition-opacity duration-500 opacity-0 top-16 left-7 lg:top-44 lg:left-30 lg:text-5xl group-hover:opacity-100">
                Tugu Malang
              </div>
            </div>
            </Link>
            <Link to='/destinasi/semeru'>
            <div className="relative group">
              <img
                src={lima}
                alt=""
                className="w-full transition-transform duration-500 transform group-hover:brightness-75"
              />
              <div className="absolute text-xs font-semibold text-white transition-opacity duration-500 opacity-0 top-16 left-10 lg:top-44 lg:left-14 lg:text-5xl group-hover:opacity-100">
                Semeru 
              </div>
            </div>
            </Link>
            <div className="">
              <img src={frame} alt="" />
              <p className="relative font-semibold text-white bottom-10 left-2 sm:bottom-20 sm:left-4 lg:bottom-24 lg:left-4 xl:bottom-36 xl:left-8 lg:text-2xl xl:text-4xl 2xl:text-5xl">
                Malang
              </p>
            </div>
            <Link to='/destinasi/museum-angkut'>
            <div className="relative group">
              <img
                src={enam}
                alt=""
                className="w-full transition-transform duration-500 transform group-hover:brightness-75"
              />
              <div className="absolute text-xs font-semibold text-white transition-opacity duration-500 opacity-0 top-16 left-5 lg:top-44 lg:left-30 lg:text-5xl group-hover:opacity-100">
                Musem Angkut
              </div>
            </div>
            </Link>
          </div>
          <div className="flex justify-center h-10 mb-20 text-center text-white ">
            <Link to='/destinasi'>
            <p className="p-2 font-medium rounded-full bg-custom-200 hover:bg-custom-500 w-36">
              Jelajahi
            </p>
            </Link>
          </div>
          
          <div className="flex justify-between shadow-xl h-60 sm:h-96 bg-custom-100 rounded-xl">
            <div className="relative flex flex-col justify-center w-1/2 left-5 sm:left-20">
              <p className="text-lg font-semibold lg:text-xl xl:text-5xl">
                Hai, Aku Jaka
              </p>
              <p className="mt-3 text-sm font-thin text-start sm:mt-8 lg:text-xl xl:text-3xl">
                Chatbot AI yang akan membantumu menjelajahi Malang. <br />
                Tanyakan apapun padaku untuk mengetahui Malang lebih banyak
              </p>
              <Link to='/chatbot'>
              <p className="p-3 mt-4 text-xs text-justify text-white rounded-md bg-custom-200 hover:bg-custom-500 w-fit sm:text-lg sm:mt-8">
                Coba Jaka
              </p>
              </Link>
            </div>
            <div className="flex flex-col justify-end w-1/3">
              <img src={bot2} className="mb-0 w-96" />
            </div>
          </div>
          
        </div>
        <section
          id="tips"
          className="h-full my-6 mb-0 font-sans sm:mt-14 sm:mb-12"
        >
          <div className="py-6 ">
            <img className="w-full" src={tipsMalang} alt="" />
          </div>
        </section>

        <div id="card section" className="w-11/12">
          <div className="flex justify-between">
            <div className="pl-4 text-xl font-semibold text-white sm:text-2xl ">
              <p>Terbaru dari kami</p>
            </div>
            <div className="hidden w-10 h-10 gap-4 mr-16 sm:flex">
              <img src={left} alt="" />
              <img src={right} alt="" />
            </div>
          </div>
          <section id="card" className="justify-around gap-5 mt-8 sm:flex">
            <div className="mx-3 my-4">
              <img src={sunset} alt="" />
              <div className="p-5 bg-white rounded-b-xl h-52 ">
                <p className="font-normal">baca 3 menit</p>
                <p className="font-bold">
                  Pecinta sunset? Ayo kunjungi tempat ini!
                </p>
                <p className="text-base font-thin xl:text-sm">
                  Sunset adalah saat dimana matahari akan segera tenggelam dan
                  justru banyak orang...
                </p>
                <div className="items-center hidden gap-3 mt-4 sm:flex">
                  <p className="text-custom-200">Lebih lanjut</p>
                  <img src={arrow} className="w-6 h-4" />
                </div>
              </div>
            </div>
            <div className="mx-3 my-4">
              <img src={santerra} alt="" />
              <div className="p-5 bg-white rounded-b-xl h-52">
                <p className="font-normal">baca 2 menit</p>
                <p className="font-bold">
                  Wisata Baru! Santerra De Laponte Siap Dikunjungi
                </p>
                <p className="text-base font-thin xl:text-sm">
                  Malang memang tak pernah habis soal wisatanya. Kali ini,
                  Pemerintah Malang baru saja meresmikan...
                </p>
                <div className="items-center hidden gap-3 mt-4 sm:flex">
                  <p className="text-custom-200">Lebih lanjut</p>
                  <img src={arrow} className="w-6 h-4" />
                </div>
              </div>
            </div>
            <div className="mx-3 my-4">
              <img src={angkot} alt="" />
              <div className="p-5 bg-white rounded-b-xl h-52">
                <p className="font-normal">baca 4 menit</p>
                <p className="font-bold">Liburan? Museum Angkut, Yuk </p>
                <p className="text-base font-thin">
                  Museum Angkut adalah salah satu destinasi wisata yang
                  menampilkan berbagai perkem...
                </p>
                <div className="items-center hidden gap-3 mt-4 sm:flex">
                  <p className="text-custom-200">Lebih lanjut</p>
                  <img src={arrow} className="w-6 h-4" />
                </div>
              </div>
            </div>
          </section>
          <div className="flex justify-center">
            <Link to='/blog'>
            <p className="p-3 mt-10 text-white rounded-full bg-custom-200 w-fit">
              Selengkapnya
            </p>
            </Link>
          </div>
        </div>
        <div
          id="FaQ"
          className="justify-around w-full mt-10 bg-custom-100 sm:flex"
        >
          <div className="w-full p-10 bg-custom-100">
            <p className="text-4xl font-semibold sm:text-6xl">
              Fraquently Asked <br /> Question
            </p>
            <p className="mt-5 text-xl">
              Berikut beberapa jawaban yang segera membantu pertanyaanmu dan
              jika tidak ada, tanyakan pada admin di bawah ini ya!
            </p>
            <p className="px-8 py-4 mt-10 text-xl font-semibold text-white rounded-full bg-custom-200 hover:bg-custom-500 w-fit">
              Tanya
            </p>
          </div>
          <div className="w-full px-10 pb-10 ">
            <FaQItem />
          </div>
        </div>

        <div id="komentar" className="w-10/12 mt-10 sm:w-11/12">
          <div id="card section" className="w-11/12">
            <div className="flex justify-between">
              <div className="text-xl font-semibold text-white sm:text-2xl ">
                <p>Terbaru dari kami</p>
              </div>
              <div className="hidden w-10 h-10 gap-4 mr-4 sm:flex">
                <img src={left} alt="" />
                <img src={right} alt="" />
              </div>
            </div>
          </div>
          <div className="justify-around mt-5 sm:flex sm:gap-16">
            <div className="flex flex-col justify-between gap-5 p-5 my-2 bg-custom-100 rounded-2xl h-72 sm:mx-3 ">
              <p className="text-xl font-bold sm:text-2xl">"Tempatnya bagus.sejuk"</p>
              <p className="font-thin">
                Tempatnya enak, rapi, sejuk, bagus banget kalo liburan <br />{" "}
                bawa keluarga ke sini ada seluncuran pelangi yang <br /> viral
                itu juga. bagus dehh pokoknya
              </p>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">Rani</p>
                  <p>Santera</p>
                </div>
                <div>
                  <img src={starlima} className="h-6 w-fit" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-5 p-5 my-2 bg-custom-100 rounded-2xl h-72 sm:mx-3">
              <p className="text-xl font-bold sm:text-2xl">"bagus poll"</p>
              <p className="font-thin">
                Udah rencana ke bromo dari tahun kemarin akhirnya
                <br /> sekarang bisa kesana. bagus bangett meskipun paling bagus{" "}
                <br /> kesini pas subuh udah gitu hawanya dingin banget
              </p>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">Andre</p>
                  <p>Gunung Bromo</p>
                </div>
                <div>
                  <img src={starempat} className="h-6 w-fit" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-5 p-5 my-2 bg-custom-100 rounded-2xl h-72 sm:mx-3">
              <p className="text-xl font-bold sm:text-2xl">“Keluarga pada happy”</p>
              <p className="font-thin">
                pas banget buat liburan sekolah soalnya anak-anak juga pada{" "}
                <br /> minta kesini katanya permainannya banyak. eh ternyata{" "}
                <br /> ga cuma permainan ada museumnya juga, bagus
              </p>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">Darmawah</p>
                  <p>Jatim Park 1</p>
                </div>
                <div>
                  <img src={starlima} className="h-6 w-fit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
